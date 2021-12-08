import React, { ReactElement } from "react";

import useBlog from "../../hooks/useBlog";

const DetailedBlog = (): ReactElement => {
  const { blog } = useBlog(4);

  if (!blog) {
    return <div>BLOG NOT FOUND</div>;
  }

  return (
    <div className="">
      <div>{blog.title}</div>
      <div>{blog.content}</div>
    </div>
  );
};

export default DetailedBlog;
