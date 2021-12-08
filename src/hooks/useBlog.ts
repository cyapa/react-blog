import { useEffect, useState } from "react";

import BlogService from "../services/BlogService";
import type { Blog } from "../types";

type BlogStatusType = "loading" | "not_found" | "found";

const useBlog = (
  blogId: number
): Readonly<{
  blog: Blog | undefined;
  blogStatus: BlogStatusType;
}> => {
  const [blog, setBlog] = useState<Blog>();
  const [blogStatus, setBlogStatus] = useState<BlogStatusType>("loading");

  useEffect(() => {
    const fetchBlog = async (): Promise<void> => {
      const { data } = await BlogService.getBlogs({ id: blogId });
      if (data?.[0]) {
        setBlog(data[0]);
        setBlogStatus("found");
        return;
      }
      setBlogStatus("not_found");
    };
    fetchBlog();
  }, []);

  return { blog, blogStatus };
};

export default useBlog;
