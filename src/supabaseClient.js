// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace these with your own Supabase Project URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
