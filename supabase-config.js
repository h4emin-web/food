window.FOOD_SOURCING_SUPABASE_URL = "https://vkmafqwfgzhminlrclxp.supabase.co";
window.FOOD_SOURCING_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbWFmcXdmZ3pobWlubHJjbHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0ODgwMTksImV4cCI6MjEwMDA2NDAxOX0.X1k5Xq8K8krk_gRATYW04e-HzQr6LyR7hf7OQ3y4NQ8";

window.foodSourcingSupabase =
  window.supabase && window.FOOD_SOURCING_SUPABASE_URL && window.FOOD_SOURCING_SUPABASE_ANON_KEY
    ? window.supabase.createClient(
        window.FOOD_SOURCING_SUPABASE_URL,
        window.FOOD_SOURCING_SUPABASE_ANON_KEY
      )
    : null;
