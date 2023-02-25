import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "ADD supabase URL";
const supabaseKey = "ADD supaBase key";
const supabase = createClient(supabaseUrl, supabaseKey);
// console.log(supabase);
export default supabase;
