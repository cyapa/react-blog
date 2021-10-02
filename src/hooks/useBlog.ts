import { useEffect, useState } from "react";

import BlogService from "../services/BlogService";
import type { Blog } from "../types";

const useBlog = (): Readonly<{
  blogs: ReadonlyArray<Blog>;
  isLoading: boolean;
}> => {
  const [blogs, setBlogs] = useState<ReadonlyArray<Blog>>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      const { data } = await BlogService.getBlogs();
      if (data) {
        setBlogs(data);
      } else {
        setBlogs([
          {
            id: "00001",
            title: "Blog 1",
            content: "Blog content",
            ctime: new Date(2021, 1, 1),
            mtime: new Date(2021, 1, 1),
          },
          {
            id: "00002",
            title: "Blog 2",
            content: "This is blog two",
            ctime: new Date(2020, 1, 1),
            mtime: new Date(2020, 1, 1),
          },
        ]);
      }
      setLoadingBlogs(false);
    };

    fetchBlogs();
  }, []);

  return { blogs, isLoading: loadingBlogs };
};

export default useBlog;
