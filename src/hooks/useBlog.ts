import { useEffect, useState } from "react";
import * as lodash from "lodash";

import BlogService from "../services/BlogService";
import type { Blog, UnsavedBlog } from "../types";

const useBlog = (): Readonly<{
  blogs: ReadonlyArray<Blog>;
  isLoading: boolean;
  addBlog: (unsavedBlog: UnsavedBlog) => Promise<void>;
  removeBlog: (blogId: string) => Promise<void>;
}> => {
  const [blogs, setBlogs] = useState<ReadonlyArray<Blog>>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      const { data } = await BlogService.getBlogs({ isDeleted: false });
      if (data) {
        const orderedBlogs = lodash.orderBy(
          data || [],
          (blog) => [blog.mtime],
          "asc"
        );
        setBlogs(orderedBlogs);
      } else {
        setBlogs([]);
      }
      setLoadingBlogs(false);
    };

    fetchBlogs();
  }, []);

  const addBlog = async (unsavedBlog: UnsavedBlog): Promise<void> => {
    const { data } = await BlogService.addBlog(unsavedBlog);
    if (!data) {
      return;
    }
    setBlogs([
      ...blogs,
      {
        id: data,
        title: unsavedBlog.title,
        content: unsavedBlog.content,
        ctime: new Date(),
        mtime: new Date(),
      },
    ]);
  };

  const removeBlog = async (blogId: string): Promise<void> => {
    const { data } = await BlogService.removeBlog(blogId);
    if (!data) {
      return;
    }
    setBlogs([...blogs].filter((blog) => blog.id !== blogId));
  };

  return { blogs, isLoading: loadingBlogs, addBlog, removeBlog };
};

export default useBlog;
