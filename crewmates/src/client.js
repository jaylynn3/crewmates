import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://imrqkamprccxrgqzvwwi.supabase.co"
const supabaseKey = "sb_publishable_5Iwe2hbSjBfn34vI3H1xWQ_NAgxCCg2"

export const supabase = createClient(supabaseUrl, supabaseKey)