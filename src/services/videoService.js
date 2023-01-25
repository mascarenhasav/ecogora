import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://dwrmdvgyhinnsisyeqas.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3cm1kdmd5aGlubnNpc3llcWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MjQ1MzcsImV4cCI6MTk4NDEwMDUzN30.ljXNR4or1wR0z9sc77fDbioofYVoexnoWmQSYNQxQo0";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}