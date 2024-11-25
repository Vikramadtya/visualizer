const BlogCard = ({ title }) => {
  return (
    <>
      <div className="relative rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
        <img
          className="h-auto w-full rounded-xl"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Card Image"
        />
        <div className="absolute end-0 start-0 top-0">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <p className="mt-1 text-gray-800">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
