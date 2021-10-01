import React, { ReactElement } from "react";

import useBlog from "../../hooks/useBlog";
import BlogCreate from "./BlogCreate";
import BlogList from "./BlogList";

const BlogPage = (): ReactElement => {
  const { blogs } = useBlog();
  return (
    <div>
      <BlogList blogs={blogs} />
      <BlogCreate />
    </div>
  );
};

export default BlogPage;
