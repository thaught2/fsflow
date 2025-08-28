// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// These are pulled from your Vite environment variables (.env or Vercel project settings)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Export as default so you can "import supabase from '../supabaseClient';"
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
