import { useEffect, useState } from "react";

import BlogService from "../services/BlogService";
import type { Blog } from "../types";

const useBlogs = (): Readonly<{
  blogs: ReadonlyArray<Blog>;
}> => {
  const [blogs, setBlogs] = useState<ReadonlyArray<Blog>>([]);

  useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      const { data } = await BlogService.getBlogs();
      if (data) {
        setBlogs(data);
      } else {
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs };
};

export default useBlogs;
