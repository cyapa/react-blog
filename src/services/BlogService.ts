import axios from "axios";

import { Blog, UnsavedBlog } from "../types";
import { APIResult } from "./types";

const API_PREFIX = "https://react-blog-cyapa-api.herokuapp.com";

const _getErrorMessage = (): string => {
  return "Error in blogService";
};

const addBlog = async (
  unsavedBlog: UnsavedBlog
): Promise<APIResult<string>> => {
  try {
    return await axios.post(`${API_PREFIX}/blog`, unsavedBlog);
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
    return await axios.patch(`https://test-edit-api`, editedBlog);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

const removeBlog = async (blogId: string): Promise<APIResult<null>> => {
  try {
    return await axios.delete(`${API_PREFIX}/blog/${blogId}`);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

const getBlogs = async (): Promise<APIResult<ReadonlyArray<Blog>>> => {
  try {
    return await axios.get(`${API_PREFIX}/blogs`);
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
  removeBlog,
  getBlogs,
};
