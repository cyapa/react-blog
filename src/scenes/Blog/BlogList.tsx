import React, { ReactElement } from "react";

import Button from "../../components/Button";
import { Blog } from "../../types";
import BlogCard from "./BlogCard";

type BlogPostProps = Readonly<{
  blogs: ReadonlyArray<Blog>;
}>;

const BlogList = ({ blogs }: BlogPostProps): ReactElement => {
  return (
    <div>
      This is the Blog List
      <div>
        <Button type="button" label="Create" />
      </div>
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
