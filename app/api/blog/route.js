import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blogSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title,content,publishedDate,author } = await request.json();
  console.log('before connection!!!!!')
  await connectMongoDB();
  console.log('connected!!!!!')
  await Blog.create({ title,content,publishedDate,author });
  return NextResponse.json({ message: "Blog Post Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog post deleted" }, { status: 200 });
}