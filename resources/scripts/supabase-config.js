
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.Url_Supabase
const supabaseKey = process.env.key_Supabase;

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
