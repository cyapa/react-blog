import React, { ReactElement } from "react";
import { RouteComponentProps, withRouter } from "react-router";

import useBlog from "../../hooks/useBlog";

const DetailedBlog = ({
  match,
}: RouteComponentProps<{ blogId: string }>): ReactElement => {
  const {
    params: { blogId },
  } = match;

  const { blog, blogStatus } = useBlog(+blogId);

  //TODO: Create a Loading UI
  if (blogStatus === "loading") {
    return <div>LOADING...</div>;
  }

  //TODO: Create  a Not found UI
  if (blogStatus === "not_found") {
    return <div>BLOG NOT FOUND</div>;
  }

  //TODO: Create  Detailed Blog UI
  if (blogStatus === "found" && blog) {
    return (
      <div className="">
        <div>{blog.title}</div>
        <div>{blog.content}</div>
      </div>
    );
  }

  return <div></div>;
};

export default withRouter(DetailedBlog);
