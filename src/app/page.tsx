import BlogGrid from "@/components/organism/blogs/blogGrid";
import { getAllBlogs } from "@/services/contentService";
import ComplexityTable from "@/components/molecule/complexityTable";
import Link from "next/link";
import Icon from "@/components/molecule/icon";

export default function Home() {
  const blogs = getAllBlogs();

  return (
    <>
      <div
        className="mb-4 flex items-center rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <Icon kind="bulb" className={"me-3 inline h-6 w-6 flex-shrink-0"} />
        <span className="sr-only">Info</span>
        <div>
          Hey there! to learn about complexity check this 👉{" "}
          <span className="font-medium">
            <Link href="/complexity">article</Link>
          </span>{" "}
          .
        </div>
      </div>
      <ComplexityTable />
      <BlogGrid blogs={blogs} />
    </>
  );
}
