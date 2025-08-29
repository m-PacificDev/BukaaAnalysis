import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Feature {
  id: string;
  plan_type: string;
  name: string;
  description: string;
  added_by: string;
  created_at: string;
}

export interface OnboardingQuestion {
  id: string;
  plan_type: string;
  question: string;
  added_by: string;
  created_at: string;
}