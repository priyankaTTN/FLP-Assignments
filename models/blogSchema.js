import mongoose, { Schema } from "mongoose";

export const blogSchema = new Schema(
    {
        title: String,
        author: String,
        publishedDate: { type: Date, default: Date.now },
        content: String
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
