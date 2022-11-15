import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://cmmhrjkrxrwxzliqwgtt.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtbWhyamtyeHJ3eHpsaXF3Z3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MTE4ODYsImV4cCI6MTk4NDA4Nzg4Nn0.iaKpCVdcmNBG5OHwMhSZ_NV8KDY3PgD1XYItdjuazMI";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}