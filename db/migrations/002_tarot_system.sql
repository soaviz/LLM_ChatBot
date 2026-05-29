-- ─────────────────────────────────────────────────────────────
-- Migration 002 — VenuX Tarot System
-- 하루 1회 무료 포춘쿠키 타로 + 1:1 타로 채팅 + 사용량 제한
--
-- 적용: psql "$DATABASE_URL" -f db/migrations/002_tarot_system.sql
-- ─────────────────────────────────────────────────────────────

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE OR REPLACE FUNCTION tarot_set_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ────────────────────────────────────────────────────────────
-- 1) tarot_daily_fortunes
-- 같은 user_id + reading_date는 같은 결과를 재노출한다.
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tarot_daily_fortunes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  reading_date date NOT NULL,
  category text NOT NULL DEFAULT 'daily',
  card_id text NOT NULL,
  orientation text NOT NULL,
  short_message text,
  action_message text,
  content_seed text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT tarot_daily_fortunes_category_check
    CHECK (category IN ('daily', 'love', 'career', 'advice', 'creative')),
  CONSTRAINT tarot_daily_fortunes_orientation_check
    CHECK (orientation IN ('upright', 'reversed')),
  CONSTRAINT tarot_daily_fortunes_user_date_unique
    UNIQUE (user_id, reading_date)
);

CREATE INDEX IF NOT EXISTS idx_tarot_daily_fortunes_user_date
  ON tarot_daily_fortunes(user_id, reading_date DESC);

-- ────────────────────────────────────────────────────────────
-- 2) tarot_chat_sessions
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tarot_chat_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  daily_fortune_id uuid REFERENCES tarot_daily_fortunes(id) ON DELETE SET NULL,
  category text NOT NULL DEFAULT 'daily',
  title text,
  initial_question text,
  is_premium boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT tarot_chat_sessions_category_check
    CHECK (category IN ('daily', 'love', 'career', 'advice', 'creative'))
);

CREATE INDEX IF NOT EXISTS idx_tarot_chat_sessions_user_created
  ON tarot_chat_sessions(user_id, created_at DESC);

DROP TRIGGER IF EXISTS trg_tarot_chat_sessions_updated_at ON tarot_chat_sessions;
CREATE TRIGGER trg_tarot_chat_sessions_updated_at
  BEFORE UPDATE ON tarot_chat_sessions
  FOR EACH ROW EXECUTE FUNCTION tarot_set_updated_at();

-- ────────────────────────────────────────────────────────────
-- 3) tarot_chat_messages
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tarot_chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES tarot_chat_sessions(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  token_count int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT tarot_chat_messages_role_check
    CHECK (role IN ('user', 'assistant', 'system')),
  CONSTRAINT tarot_chat_messages_token_count_check
    CHECK (token_count >= 0)
);

CREATE INDEX IF NOT EXISTS idx_tarot_chat_messages_session_created
  ON tarot_chat_messages(session_id, created_at ASC);

-- ────────────────────────────────────────────────────────────
-- 4) tarot_usage_limits
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tarot_usage_limits (
  user_id uuid PRIMARY KEY,
  last_free_date date,
  daily_free_used boolean NOT NULL DEFAULT false,
  free_chat_count int NOT NULL DEFAULT 0,
  credit_balance int NOT NULL DEFAULT 0,
  subscription_tier text NOT NULL DEFAULT 'free',
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT tarot_usage_limits_free_chat_count_check
    CHECK (free_chat_count >= 0),
  CONSTRAINT tarot_usage_limits_credit_balance_check
    CHECK (credit_balance >= 0),
  CONSTRAINT tarot_usage_limits_subscription_tier_check
    CHECK (subscription_tier IN ('free', 'plus', 'mystic'))
);

DROP TRIGGER IF EXISTS trg_tarot_usage_limits_updated_at ON tarot_usage_limits;
CREATE TRIGGER trg_tarot_usage_limits_updated_at
  BEFORE UPDATE ON tarot_usage_limits
  FOR EACH ROW EXECUTE FUNCTION tarot_set_updated_at();

-- ────────────────────────────────────────────────────────────
-- 5) tarot_reading_analytics
-- 이벤트 로그. user_id는 비로그인/익명 이벤트를 위해 nullable.
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tarot_reading_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  event_name text NOT NULL,
  event_payload jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_tarot_reading_analytics_event_created
  ON tarot_reading_analytics(event_name, created_at DESC);

-- ────────────────────────────────────────────────────────────
-- RLS
-- service role은 Supabase 기본 동작으로 RLS를 우회할 수 있다.
-- ────────────────────────────────────────────────────────────
ALTER TABLE tarot_daily_fortunes ENABLE ROW LEVEL SECURITY;
ALTER TABLE tarot_chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE tarot_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE tarot_usage_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE tarot_reading_analytics ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS tarot_daily_fortunes_select_own ON tarot_daily_fortunes;
CREATE POLICY tarot_daily_fortunes_select_own ON tarot_daily_fortunes
  FOR SELECT
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_daily_fortunes_insert_own ON tarot_daily_fortunes;
CREATE POLICY tarot_daily_fortunes_insert_own ON tarot_daily_fortunes
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_chat_sessions_select_own ON tarot_chat_sessions;
CREATE POLICY tarot_chat_sessions_select_own ON tarot_chat_sessions
  FOR SELECT
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_chat_sessions_insert_own ON tarot_chat_sessions;
CREATE POLICY tarot_chat_sessions_insert_own ON tarot_chat_sessions
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_chat_sessions_update_own ON tarot_chat_sessions;
CREATE POLICY tarot_chat_sessions_update_own ON tarot_chat_sessions
  FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_chat_messages_select_own ON tarot_chat_messages;
CREATE POLICY tarot_chat_messages_select_own ON tarot_chat_messages
  FOR SELECT
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_chat_messages_insert_own ON tarot_chat_messages;
CREATE POLICY tarot_chat_messages_insert_own ON tarot_chat_messages
  FOR INSERT
  WITH CHECK (
    user_id = auth.uid()
    AND EXISTS (
      SELECT 1
      FROM tarot_chat_sessions s
      WHERE s.id = session_id
        AND s.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS tarot_usage_limits_select_own ON tarot_usage_limits;
CREATE POLICY tarot_usage_limits_select_own ON tarot_usage_limits
  FOR SELECT
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_usage_limits_insert_own ON tarot_usage_limits;
CREATE POLICY tarot_usage_limits_insert_own ON tarot_usage_limits
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_usage_limits_update_own ON tarot_usage_limits;
CREATE POLICY tarot_usage_limits_update_own ON tarot_usage_limits
  FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_reading_analytics_select_own ON tarot_reading_analytics;
CREATE POLICY tarot_reading_analytics_select_own ON tarot_reading_analytics
  FOR SELECT
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS tarot_reading_analytics_insert_own ON tarot_reading_analytics;
CREATE POLICY tarot_reading_analytics_insert_own ON tarot_reading_analytics
  FOR INSERT
  WITH CHECK (user_id IS NULL OR user_id = auth.uid());

COMMIT;

-- ─────────────────────────────────────────────────────────────
-- 변경 요약
-- tarot_daily_fortunes    : 하루 1회 카드 저장 및 재노출
-- tarot_chat_sessions     : 1:1 타로 채팅 세션
-- tarot_chat_messages     : 세션별 메시지 저장
-- tarot_usage_limits      : 무료 질문/크레딧/구독 확장
-- tarot_reading_analytics : 이벤트 분석 로그
-- ─────────────────────────────────────────────────────────────
