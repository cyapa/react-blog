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
    <div className="grid grid-cols-2 gap-4">
      <div className="">
        <div className="mb-5">
          <Button type="button" label="Create" onClick={onAddClick} />
        </div>

        {actionType === "blog_add" && (
          <div className="border-2 border-gray-400">
            <BlogCreate onCancel={onCancelClick} />
          </div>
        )}
      </div>

      <div className="mb-5">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogPage;
