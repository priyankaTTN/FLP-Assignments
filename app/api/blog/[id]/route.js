import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blogSchema";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newContent: content, newPublishedDate: publishedDate, newAuthor: author  } = await request.json();
  await connectMongoDB();
  await Blog.findByIdAndUpdate(id, { title, content, publishedDate, author });
  return NextResponse.json({ message: "Blog post updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}