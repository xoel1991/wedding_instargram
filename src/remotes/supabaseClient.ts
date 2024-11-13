import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseUrl = 'https://mqmqxvxxfyhkvaaldzpe.supabase.co';
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbXF4dnh4Znloa3ZhYWxkenBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MDA3ODUsImV4cCI6MjA0Njk3Njc4NX0.2XCZP9oGgoY4MTGHKRdOzgqPvOR6-JxribehWjkmoDk';

if (supabaseUrl == null || supabaseAnonKey == null) {
  throw Error(
    `[Supabase] Failed initialize client -> supabaseUrl: ${supabaseUrl} / supabaseAnonKey: ${supabaseAnonKey}`
  );
}

export const api = createClient(supabaseUrl, supabaseAnonKey);
