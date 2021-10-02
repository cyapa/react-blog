import React, { ReactElement } from "react";
import styled from "styled-components";

import Button from "../../components/Button";
import { Blog } from "../../types";

const StyledBlog = styled.div`
  font-size: 1em;
  border: 2px solid rgba(229, 231, 235, 0.5);
  border-radius: 5px;
  padding: 1em;
  width: 100%;
  margin: 1em;
`;

type BlogCardProps = Readonly<{
  blog: Blog;
}>;

const BlogCard = ({ blog }: BlogCardProps): ReactElement => {
  return (
    <StyledBlog>
      <div className="">
        <div className="grid grid-cols-2  grid-rows-3 relative ">
          <div>
            <span className="text-base text-pink-500 hover:text-pink-700">
              {blog.title}
            </span>
          </div>

          <div className="absolute  w-24 top-0 right-0">
            <Button type="button" label="Delete" />
          </div>
        </div>
        <div>
          <p className="pt-3 text-base leading-6 space-y-4 text-gray-500">
            {blog.content}
          </p>
        </div>
        <div className="pt-3 grid grid-cols-2 gap-2 my-5 text-base text-gray-700">
          <div>
            <span className="mr-3">Created:</span>
            <span>{blog.ctime.toDateString()}</span>
          </div>
          <div>
            <span className="mr-3">Modified:</span>
            <span>{blog.ctime.toDateString()}</span>
          </div>
        </div>
      </div>
    </StyledBlog>
  );
};

export default BlogCard;
