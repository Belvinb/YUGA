import connectDB from "@/lib/db";

import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req,{params}) {
  try {
    console.log(params.id)
    const id = params.id
   
    // await connectDB();

    const body = await req.json();
    const existingProject = await Project.findById(id);

    existingProject.project_name = body.project_name ?? existingProject.project_name;
    existingProject.details = body.details ?? existingProject.details;
    existingProject.main_image = body.main_image ?? existingProject.main_image;
    existingProject.project_images = body.project_images ?? existingProject.project_images
    existingProject.unique_name = body.unique_name ?? existingProject.unique_name
    existingProject.featured = body.featured ?? existingProject.featured
    existingProject.priority = body.priority ?? existingProject.priority
    existingProject.location = body.location ?? existingProject.location

    
    await existingProject.save()


    return NextResponse.json(existingProject);
  } catch (error) {
    console.log(error);
  }
}
