import Link from "next/link";
import Pigeon from "../../../../../public/icons/walking.gif";
import Image from "next/image";

const BlogCard = ({ title, description, slug, color }) => {
  return (
    <>
      <Link
        href={`/${slug}`}
        className={`${color} block max-w-sm rounded-lg border border-gray-200 p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
      >
        <div className="mb-5 flex items-center gap-3">
          <Image src={Pigeon} alt="my gif" height={50} width={50} />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>

        <p className="font-normal text-gray-700 dark:text-white">
          {description}
        </p>
        <span className="bg-green-500 bg-orange-500 bg-red-500" />
      </Link>
    </>
  );
};

export default BlogCard;
