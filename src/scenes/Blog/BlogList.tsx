import React, { ReactElement } from "react";

import { Blog } from "../../types";
import BlogCard from "./BlogCard";

type BlogPostProps = Readonly<{
  blogs: ReadonlyArray<Blog>;
}>;

const BlogList = ({ blogs }: BlogPostProps): ReactElement => {
  return (
    <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
      <div className="divide-y divide-gray-400">
        <div className="">
          <p>{`Number of blogs posted : ${blogs.length}`}</p>
        </div>

        <div className="my-5 py-5 tt">
          {blogs.length === 0 && <div>No blogs are posted</div>}
          {blogs.map((blog: Blog) => (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
