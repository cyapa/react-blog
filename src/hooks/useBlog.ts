import { useEffect, useState } from "react";

import BlogService from "../services/BlogService";
import type { Blog } from "../types";

const useBlog = (
  blogId: number
): Readonly<{
  blog: Blog | undefined;
  isLoadingBlog: boolean;
}> => {
  const [blog, setBlog] = useState<Blog>();
  const [isLoadingBlog, setLoadingBlog] = useState(true);

  useEffect(() => {
    const fetchBlog = async (): Promise<void> => {
      const { data } = await BlogService.getBlogs({ id: blogId });
      if (data) {
        setBlog(data[0]);
      }
      setLoadingBlog(false);
    };
    fetchBlog();
  }, []);

  return { blog, isLoadingBlog };
};

export default useBlog;
