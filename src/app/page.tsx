import BlogGrid from "@/components/organism/blogs/blogGrid";
import { getAllBlogs } from "@/services/contentService";
import ComplexityTable from "@/components/molecule/complexityTable";

export default function Home() {
  const blogs = getAllBlogs();

  return (
    <>
      <ComplexityTable />
      <BlogGrid blogs={blogs} />
    </>
  );
}
