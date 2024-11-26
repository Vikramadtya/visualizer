import Image from "next/image";
import NavigationBar from "@/components/organism/header/navigationBar";
import BlogGrid from "@/components/organism/blogs/blogGrid";
import Footer from "@/components/organism/footer/footer";

export default function Home() {
  return (
    <>
      <BlogGrid />
    </>
  );
}
