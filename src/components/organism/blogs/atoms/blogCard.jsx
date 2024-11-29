import Link from "next/link";
import { classNameResolver } from "@/utils/classNameResolver";

const BlogCard = ({ title, description, slug, color }) => {
  return (
    <>
      <Link
        href={`/${slug}`}
        className={`${color} block max-w-sm rounded-lg border border-gray-200 p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Link>
    </>
  );
};

export default BlogCard;
