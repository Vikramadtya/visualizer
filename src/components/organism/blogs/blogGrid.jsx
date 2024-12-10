import BlogCard from "./atoms/blogCard";

const BlogGrid = ({ blogs }) => {
  return (
    <>
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
        {blogs.map((blog) => {
          return (
            <div key={blog.slug}>
              <BlogCard
                color={blog.color}
                title={blog.title}
                description={blog.description}
                slug={blog.slug}
              />
            </div>
          );
        })}
      </div>
      <span className="bg-green-500 bg-orange-500 bg-red-500" />
    </>
  );
};

export default BlogGrid;
