import sendEmail from "@/utils/Email";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  await sendEmail(data);

  return NextResponse.json(data);
}
