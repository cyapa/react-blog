import React, { ReactElement } from "react";

import { Blog } from "../../types";
import BlogCard from "./BlogCard";

type BlogPostProps = Readonly<{
  blogs: ReadonlyArray<Blog>;
}>;

const BlogList = ({ blogs }: BlogPostProps): ReactElement => {
  return (
    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
      <div>Blogs will appear below</div>
      <div>
        {blogs.map((blog: Blog) => (
          <div key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
