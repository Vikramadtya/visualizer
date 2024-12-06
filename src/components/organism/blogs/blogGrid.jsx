import BlogCard from "./atoms/blogCard";

const BlogGrid = ({ blogs }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
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
        <span className="bg-green-500 bg-orange-500 bg-red-500" />
      </div>
    </>
  );
};

export default BlogGrid;
