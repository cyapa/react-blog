import React, { ReactElement } from "react";
import styled from "styled-components";

import Button from "../../components/Button";
import { Blog } from "../../types";
import BlogCard from "./BlogCard";

const StyledBlogList = styled.div`
  width: 50%;
`;

type BlogPostProps = Readonly<{
  blogs: ReadonlyArray<Blog>;
}>;

const BlogList = ({ blogs }: BlogPostProps): ReactElement => {
  return (
    <StyledBlogList>
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
    </StyledBlogList>
  );
};

export default BlogList;
