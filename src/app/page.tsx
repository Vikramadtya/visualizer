import Image from "next/image";
import NavigationBar from "@/components/organism/header/navigationBar";
import BlogGrid from "@/components/organism/blogs/blogGrid";
import Footer from "@/components/organism/footer/footer";
import { getAllBlogs } from "@/services/contentService";

export default function Home() {
  const blogs = getAllBlogs();

  return (
    <>
      <BlogGrid blogs={blogs} />
    </>
  );
}
