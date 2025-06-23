import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface WaitlistEntry {
  id?: number
  name: string
  email: string
  role: string
}

export interface NewsletterContact {
  id?: number
  email: string
  submitted_at?: string
  submitted_date?: string
}
