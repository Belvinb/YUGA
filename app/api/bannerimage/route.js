import connectDB from "@/lib/db";
import Banner from "@/models/bannerModel";
import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Get route")
    await connectDB();
    const result = await Banner.find();
    // console.log(result[0]?.images,"Res")
    // const final = result[0]?.images
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching banners:", error);
    return NextResponse.error("Error fetching banners", { status: 500 });
  }
}

export async function POST(req){
  await connectDB()

  const body = await req.json()
  const newProject = await Project.create(body)
  return NextResponse.json(newProject)

  try {
    
  } catch (error) {
    
  }
  
}
