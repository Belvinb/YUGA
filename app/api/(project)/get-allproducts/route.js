import connectDB from "@/lib/db";

import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

  
    const allprojects = await Project.find();
    return NextResponse.json(allprojects);
  } catch (error) {
    console.log(error);
  }
}
