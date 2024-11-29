import BlogCard from "./atoms/blogCard";
import { getAllBlogs } from "@/services/contentService";

const BlogGrid = ({ blogs }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => {
          return (
            <div>
              <BlogCard
                key={blog.slug}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                slug={blog.slug}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogGrid;
