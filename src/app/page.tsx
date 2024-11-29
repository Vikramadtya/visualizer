import BlogGrid from "@/components/organism/blogs/blogGrid";
import { getAllBlogs } from "@/services/contentService";

export default function Home() {
  const blogs = getAllBlogs();

  return (
    <>
      <BlogGrid blogs={blogs} />
    </>
  );
}
