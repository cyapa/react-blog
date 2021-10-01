import axios from "axios";

import { Blog } from "../types";
import { APIResult } from "./types";

const _getErrorMessage = (): string => {
  return "Error in blogService";
};

const getBlogs = async (): Promise<APIResult<ReadonlyArray<Blog>>> => {
  try {
    return await axios.get("");
  } catch {
    return {
      data: null,
      error: { message: _getErrorMessage() },
    };
  }
};

export default {
  getBlogs,
};
