import BlogCard from "./atoms/blogCard";

const BlogGrid = ({ blogs }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => {
          return (
            <div key={blog.slug}>
              <BlogCard
                title={blog.title}
                description={blog.description}
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
