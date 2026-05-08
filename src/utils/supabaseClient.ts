import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL="https://qkzfxvdbpcwntmbwhtcf.supabase.co"
const VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFremZ4dmRicGN3bnRtYndodGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxODQ4NDEsImV4cCI6MjA5Mzc2MDg0MX0.i33Odjx_mznj2nOxOtepp14TEOQKQzU3I5r88GpFPpA"

const supabaseUrl = VITE_SUPABASE_URL
const supabaseKey = VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);