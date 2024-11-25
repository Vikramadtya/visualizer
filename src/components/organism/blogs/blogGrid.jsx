import BlogCard from "./atoms/blogCard";

const BlogGrid = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <BlogCard title={"Bubble Sort"} />
        </div>
        <div>
          <BlogCard title={"Bubble Sort"} />
        </div>
        <div>
          <BlogCard title={"Bubble Sort"} />
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
