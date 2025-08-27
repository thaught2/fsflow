import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sibbjkjxrrbjyjsrmxdn.supabase.co';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; // replace this with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
