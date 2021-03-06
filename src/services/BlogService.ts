import axios from "axios";

import { Blog, BlogFilter, BlogPartialUpdate, UnsavedBlog } from "../types";
import { toSnakeCaseKeys } from "../utils/objectUtils";
import { APIResult, CreateResult } from "./types";

const API_PREFIX = "http://127.0.0.1:8181";

const _getErrorMessage = (): string => {
  return "Error in blogService";
};

const addBlog = async (
  unsavedBlog: UnsavedBlog
): Promise<APIResult<CreateResult>> => {
  try {
    return await axios.post(`${API_PREFIX}/blog`, unsavedBlog);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

//TODO: Not yet implemented
const editBlog = async (
  blogPartialUpdate: BlogPartialUpdate
): Promise<APIResult<Readonly<Blog>>> => {
  try {
    return await axios.patch(`https://test-edit-api`, blogPartialUpdate);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

const removeBlog = async (blogId: number): Promise<APIResult<null>> => {
  try {
    return await axios.delete(`${API_PREFIX}/blog/${blogId}`);
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

const getBlogs = async (
  blogFilter: BlogFilter
): Promise<APIResult<ReadonlyArray<Blog>>> => {
  try {
    return await axios.get(`${API_PREFIX}/blogs`, {
      params: toSnakeCaseKeys(blogFilter),
    });
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
