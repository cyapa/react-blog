import React, { ReactElement } from "react";

import { Blog } from "../../types";
import BlogCard from "./BlogCard";

type BlogPostProps = Readonly<{
  blogs: ReadonlyArray<Blog>;
  removeBlog: (blogId: number) => Promise<void>;
}>;

const BlogList = ({ blogs, removeBlog }: BlogPostProps): ReactElement => {
  return (
    <div className="">
      <div className="divide-y divide-gray-400">
        <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <span>{`Number of blogs posted : ${blogs.length}`}</span>
        </div>

        <div className="my-5 py-5 tt">
          {blogs.length === 0 && <div>No blogs are posted</div>}
          {blogs.map((blog: Blog) => (
            <div key={blog.id}>
              <BlogCard blog={blog} removeBlog={removeBlog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
