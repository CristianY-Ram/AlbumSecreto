// ARCHIVO "services/SBClient.js"

const { createClient } = require('@supabase/supabase-js');
const urlSB = process.env.SUPABASE_URL;
const keySB = process.env.SUPABASE_KEY;
const secretSB = process.env.SUPABASE_SECRET;
const AccederSBP = createClient(urlSB, keySB);
const AccederSBS = createClient(urlSB, secretSB);
module.exports = { AccederSBP, AccederSBS };