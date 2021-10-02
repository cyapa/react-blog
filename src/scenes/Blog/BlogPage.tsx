import React, { ReactElement, useState } from "react";

import Button from "../../components/Button";
import useBlog from "../../hooks/useBlog";
import BlogCreate from "./BlogCreate";
import BlogList from "./BlogList";

type ActionType = "blog_add" | "blog_delete";

const BlogPage = (): ReactElement => {
  const { blogs } = useBlog();
  const [actionType, setActionType] = useState<ActionType | undefined>(
    undefined
  );

  const onAddClick = () => {
    setActionType("blog_add");
  };

  const onCancelClick = () => {
    setActionType(undefined);
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <Button type="button" label="Create" onClick={onAddClick} />
      </div>
      <div>
        <BlogList blogs={blogs} />
      </div>
      {actionType === "blog_add" && (
        <div>
          <BlogCreate onCancel={onCancelClick} />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
