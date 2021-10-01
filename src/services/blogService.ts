import axios from "axios";

import { Blog, UnsavedBlog } from "../types";
import { APIResult } from "./types";

const _getErrorMessage = (): string => {
  return "Error in blogService";
};

const addBlog = async (
  unsavedBlog: UnsavedBlog
): Promise<APIResult<string>> => {
  try {
    return await axios.post(``, unsavedBlog);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

const editBlog = async (
  editedBlog: UnsavedBlog
): Promise<APIResult<Readonly<Blog>>> => {
  try {
    return await axios.patch(``, editedBlog);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

const deleteBlog = async (blogId: string): Promise<APIResult<null>> => {
  try {
    return await axios.delete(`/${blogId}`);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

const getBlogs = async (): Promise<APIResult<ReadonlyArray<Blog>>> => {
  try {
    return await axios.get(``);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

export default {
  addBlog,
  editBlog,
  deleteBlog,
  getBlogs,
};
