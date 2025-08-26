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
      "58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions": {
        Row: {
          id: string
          user_id: string
          name: string
          email: string
          phone: string | null
          company: string | null
          message: string
          status: "new" | "read" | "replied" | "closed"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          message: string
          status?: "new" | "read" | "replied" | "closed"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          message?: string
          status?: "new" | "read" | "replied" | "closed"
          created_at?: string
          updated_at?: string
        }
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