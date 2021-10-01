import * as yup from "yup";

const blogSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required("Blog title is required")
    .max(50, "Only 50 characters allowed"),
  content: yup
    .string()
    .trim()
    .required("Blog content is required")
    .max(100, "Only 100 characters allowed"),
});

export const INITIAL_VALUES = {
  title: "",
  content: "",
};

export default blogSchema;
