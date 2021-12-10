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

  //TODO: Create a Not found UI
  if (blogStatus === "not_found") {
    return <div>BLOG NOT FOUND</div>;
  }

  //TODO: Create a Detailed Blog UI
  if (blogStatus === "found" && blog) {
    return (
      <div className="">
        <div>
          <span className="text-xl text-pink-500">{blog.title}</span>
        </div>
        <div>
          <span className="text-base">{blog.content}</span>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default withRouter(DetailedBlog);
