import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/components/Contact/schema"
import { createClient } from "@/utils/supabase/server"

export async function GET(req: NextRequest) {
  // initialize supabase client
  const supabase = await createClient();

  const  data = await supabase.from("videos").select("*")

  if (data?.error) {
    console.log(JSON.stringify(data.error, null, 2))
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }

  if (data?.data) {
    return NextResponse.json(data.data)
  }

  return NextResponse.json({ error: "Failed to fetch videos" }, { status: 400 });
}