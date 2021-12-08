export type Blog = Readonly<{
  id: number;
  title: string;
  content: string;
  ctime: Date;
  mtime: Date;
}>;


export type BlogPartialUpdate = Readonly<{
  title?: string;
  content?: string;
}>;

export type UnsavedBlog = Readonly<{
  title: string;
  content: string;
}>;

export type BlogFilter = Readonly<{
  id?: number;
  isDeleted?: boolean;
}>;
