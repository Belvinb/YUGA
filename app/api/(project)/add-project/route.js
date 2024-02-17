import connectDB from "@/lib/db";

import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const newProject = await Project.create(body);
    return NextResponse.json(newProject);
  } catch (error) {
    console.log(error);
  }
}
