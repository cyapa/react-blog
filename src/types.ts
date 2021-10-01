export type Blog = Readonly<{
  id: number;
  title: string;
  content: string;
  ctime: Date;
  mtime: Date;
}>;

export type UnsavedBlog = Readonly<{
  title: string;
  content: string;
}>;
