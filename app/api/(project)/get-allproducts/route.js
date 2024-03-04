import connectDB from "@/lib/db";

import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

  
    const allprojects = await Project.find({},{_id:1,main_image:1,project_name:1,location:1}).sort({priority:1});
    return NextResponse.json(allprojects);
  } catch (error) {
    console.log(error);
  }
}
