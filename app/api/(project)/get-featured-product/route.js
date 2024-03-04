import connectDB from "@/lib/db";

import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

  
    const featured = await Project.find({featured:true},{project_name:1,_id:1,main_image:1,location:1});
    return NextResponse.json(featured);
  } catch (error) {
    console.log(error);
  }
}
