export const APP_BASE = "/app";

const BLOG_BASE = "/blogs";
export const BLOG = {
  HOME: BLOG_BASE,
  BLOG: `${BLOG_BASE}/blog/:blogId`,
  CREATE: `${BLOG_BASE}/new`,
};
