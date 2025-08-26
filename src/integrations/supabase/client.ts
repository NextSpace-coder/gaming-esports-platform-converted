import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://iaptupykxulqphglbqbc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcHR1cHlreHVscXBoZ2xicWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzQyNTYsImV4cCI6MjA2MzUxMDI1Nn0.DGdq6_7Fv6AuuCY6Hv6YDv_kaMpv_Z7Q6absvQhHarI";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);