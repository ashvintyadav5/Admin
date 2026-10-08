import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://yakkrwubcxrkzolzmwxy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ejHN26g6IwUi_g2Ee3RgtA_miJM5S-9';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
