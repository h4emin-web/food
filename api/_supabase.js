const SUPABASE_URL = process.env.SUPABASE_URL || "https://vkmafqwfgzhminlrclxp.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbWFmcXdmZ3pobWlubHJjbHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0ODgwMTksImV4cCI6MjEwMDA2NDAxOX0.X1k5Xq8K8krk_gRATYW04e-HzQr6LyR7hf7OQ3y4NQ8";

async function fetchSupabase(path) {
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, Accept: "application/json" },
  });
}

module.exports = { fetchSupabase };
