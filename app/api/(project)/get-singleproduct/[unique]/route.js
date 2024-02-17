import connectDB from "@/lib/db";

import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req,{params}) {
  try {
    await connectDB();

const id = params.unique
console.log(id)  
    // const featured = await Project.findOne({featured:true});
    // return NextResponse.json(featured);
  } catch (error) {
    console.log(error);
  }
}
