export type Blog = Readonly<{
  id: number;
  title: string;
  content: string;
  ctime: Date;
  mtime: Date;
}>;
