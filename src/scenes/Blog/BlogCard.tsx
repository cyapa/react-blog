import React, { ReactElement } from "react";

import { Blog } from "../../types";

type BlogCardProps = Readonly<{
  blog: Blog;
}>;

const BlogCard = ({ blog }: BlogCardProps): ReactElement => {
  return (
    <div>
      <div>{blog.title}</div>
      <div>{blog.content}</div>
      <div>{blog.ctime}</div>
    </div>
  );
};

export default BlogCard;
