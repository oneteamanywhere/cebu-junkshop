import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/components/Contact/schema"
import { createClient } from "@/utils/supabase/server"

export async function POST(req: NextRequest) {
  const body = await req.json();
  let data;

  // initialize supabase client
  const supabase = await createClient();

  try {
    data = await contactSchema.validate(body, { abortEarly: false});
  } catch (err) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const { error } = await supabase.from("contact_submissions").insert({
    fullName: body.fullName,
    email: body.email,
    phoneNumber: body.phoneNumber,
    message: body.message,
    consent: body.consent,
  })

  if (error) {
    console.log(JSON.stringify(error, null, 2))
    return NextResponse.json({ error: "Failed to save contact submission" }, { status: 500 });
  }

  return NextResponse.json({ ok: true})
}