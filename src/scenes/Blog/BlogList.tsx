import React, { ReactElement } from "react";

import { Blog } from "../../types";
import BlogCard from "./BlogCard";

type BlogPostProps = Readonly<{
  blogs: ReadonlyArray<Blog>;
}>;

const BlogList = ({ blogs }: BlogPostProps): ReactElement => {
  return (
    <div>
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