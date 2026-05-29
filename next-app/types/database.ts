/**
 * Supabase Database 타입 정의
 *
 * 실제 스키마 기반 타입을 자동 생성하려면:
 *   npx supabase gen types typescript --project-id yfzhvuyrdabpzowprupa > types/database.ts
 *
 * 또는 로컬 Supabase 사용 시:
 *   npx supabase gen types typescript --local > types/database.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string | null
          nickname: string | null
          avatar_url: string | null
          onboarded_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          nickname?: string | null
          avatar_url?: string | null
          onboarded_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          nickname?: string | null
          avatar_url?: string | null
          onboarded_at?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      personas: {
        Row: {
          id: string
          user_id: string
          name: string
          slug: string
          tagline: string | null
          backstory: string | null
          mbti: string | null
          element_code: string | null
          genre: string | null
          avatar_url: string | null
          description: string | null
          voice_config: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string
          name: string
          slug: string
          tagline?: string | null
          backstory?: string | null
          mbti?: string | null
          element_code?: string | null
          genre?: string | null
          avatar_url?: string | null
          description?: string | null
          voice_config?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          slug?: string
          tagline?: string | null
          backstory?: string | null
          mbti?: string | null
          element_code?: string | null
          genre?: string | null
          avatar_url?: string | null
          description?: string | null
          voice_config?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'personas_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      projects: {
        Row: {
          id: string
          user_id: string
          title: string
          status: 'draft' | 'in_progress' | 'published' | 'archived'
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          status?: 'draft' | 'in_progress' | 'published' | 'archived'
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          status?: 'draft' | 'in_progress' | 'published' | 'archived'
          metadata?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'projects_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      episodes: {
        Row: {
          id: string
          user_id: string
          project_id: string
          number: number
          title: string | null
          synopsis: string | null
          status: 'draft' | 'outline' | 'script' | 'locked' | 'done'
          archived: boolean
          meta: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          project_id: string
          number?: number
          title?: string | null
          synopsis?: string | null
          status?: 'draft' | 'outline' | 'script' | 'locked' | 'done'
          archived?: boolean
          meta?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          number?: number
          title?: string | null
          synopsis?: string | null
          status?: 'draft' | 'outline' | 'script' | 'locked' | 'done'
          archived?: boolean
          meta?: Json
          updated_at?: string
        }
        Relationships: []
      }
      scenes: {
        Row: {
          id: string
          user_id: string
          project_id: string
          episode_id: string
          number: number
          heading: string | null
          beat: string | null
          description: string | null
          status: 'draft' | 'outline' | 'script' | 'locked' | 'done'
          archived: boolean
          meta: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          project_id: string
          episode_id: string
          number?: number
          heading?: string | null
          beat?: string | null
          description?: string | null
          status?: 'draft' | 'outline' | 'script' | 'locked' | 'done'
          archived?: boolean
          meta?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          number?: number
          heading?: string | null
          beat?: string | null
          description?: string | null
          status?: 'draft' | 'outline' | 'script' | 'locked' | 'done'
          archived?: boolean
          meta?: Json
          updated_at?: string
        }
        Relationships: []
      }
      shots: {
        Row: {
          id: string
          user_id: string
          project_id: string
          scene_id: string
          number: number
          shot_type: string | null
          camera_move: string | null
          duration_ms: number | null
          prompt: string | null
          status: 'draft' | 'generated' | 'approved' | 'rejected' | 'archived'
          archived: boolean
          meta: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          project_id: string
          scene_id: string
          number?: number
          shot_type?: string | null
          camera_move?: string | null
          duration_ms?: number | null
          prompt?: string | null
          status?: 'draft' | 'generated' | 'approved' | 'rejected' | 'archived'
          archived?: boolean
          meta?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          number?: number
          shot_type?: string | null
          camera_move?: string | null
          duration_ms?: number | null
          prompt?: string | null
          status?: 'draft' | 'generated' | 'approved' | 'rejected' | 'archived'
          archived?: boolean
          meta?: Json
          updated_at?: string
        }
        Relationships: []
      }
      tarot_daily_fortunes: {
        Row: {
          id: string
          user_id: string
          reading_date: string
          category: string
          card_id: string
          orientation: string
          short_message: string | null
          action_message: string | null
          content_seed: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          reading_date: string
          category?: string
          card_id: string
          orientation: string
          short_message?: string | null
          action_message?: string | null
          content_seed?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          reading_date?: string
          category?: string
          card_id?: string
          orientation?: string
          short_message?: string | null
          action_message?: string | null
          content_seed?: string | null
          created_at?: string
        }
        Relationships: []
      }
      tarot_chat_sessions: {
        Row: {
          id: string
          user_id: string
          daily_fortune_id: string | null
          category: string
          title: string | null
          initial_question: string | null
          is_premium: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          daily_fortune_id?: string | null
          category?: string
          title?: string | null
          initial_question?: string | null
          is_premium?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          daily_fortune_id?: string | null
          category?: string
          title?: string | null
          initial_question?: string | null
          is_premium?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      tarot_chat_messages: {
        Row: {
          id: string
          session_id: string
          user_id: string
          role: string
          content: string
          token_count: number
          created_at: string
        }
        Insert: {
          id?: string
          session_id: string
          user_id: string
          role: string
          content: string
          token_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          session_id?: string
          user_id?: string
          role?: string
          content?: string
          token_count?: number
          created_at?: string
        }
        Relationships: []
      }
      tarot_usage_limits: {
        Row: {
          user_id: string
          last_free_date: string | null
          daily_free_used: boolean
          free_chat_count: number
          credit_balance: number
          subscription_tier: string
          streak_count: number
          last_opened_date: string | null
          bonus_credit_claimed_date: string | null
          monthly_insight_unlocked: boolean
          updated_at: string
        }
        Insert: {
          user_id: string
          last_free_date?: string | null
          daily_free_used?: boolean
          free_chat_count?: number
          credit_balance?: number
          subscription_tier?: string
          streak_count?: number
          last_opened_date?: string | null
          bonus_credit_claimed_date?: string | null
          monthly_insight_unlocked?: boolean
          updated_at?: string
        }
        Update: {
          user_id?: string
          last_free_date?: string | null
          daily_free_used?: boolean
          free_chat_count?: number
          credit_balance?: number
          subscription_tier?: string
          streak_count?: number
          last_opened_date?: string | null
          bonus_credit_claimed_date?: string | null
          monthly_insight_unlocked?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      tarot_reading_analytics: {
        Row: {
          id: string
          user_id: string | null
          event_name: string
          event_payload: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          event_name: string
          event_payload?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          event_name?: string
          event_payload?: Json | null
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// 편의용 타입 헬퍼
export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']

export type InsertTables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert']

export type UpdateTables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update']
