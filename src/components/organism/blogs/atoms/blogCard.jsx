import Link from "next/link";

const BlogCard = ({ title, description, slug, color }) => {
  return (
    <>
      <Link
        href={`/${slug}`}
        className="block max-w-sm rounded-lg border border-gray-200 p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        style={{ background: color }}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-white">
          {description}
        </p>
      </Link>
    </>
  );
};

export default BlogCard;
