-- ─────────────────────────────────────────────────────────────
-- Migration 003 — VenuX Tarot Rewards
-- KST 기준 연속 출석, 3일 보너스 크레딧, 7일 월간 인사이트 해금
-- ─────────────────────────────────────────────────────────────

BEGIN;

ALTER TABLE tarot_usage_limits
  ADD COLUMN IF NOT EXISTS streak_count int NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS last_opened_date date,
  ADD COLUMN IF NOT EXISTS bonus_credit_claimed_date date,
  ADD COLUMN IF NOT EXISTS monthly_insight_unlocked boolean NOT NULL DEFAULT false;

ALTER TABLE tarot_usage_limits
  DROP CONSTRAINT IF EXISTS tarot_usage_limits_streak_count_check;

ALTER TABLE tarot_usage_limits
  ADD CONSTRAINT tarot_usage_limits_streak_count_check
  CHECK (streak_count >= 0);

CREATE INDEX IF NOT EXISTS idx_tarot_usage_limits_last_opened_date
  ON tarot_usage_limits(last_opened_date DESC);

COMMIT;
