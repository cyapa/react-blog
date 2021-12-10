import React, { ReactElement } from "react";
import { Form, Formik } from "formik";

import Button from "../../components/Button";
import TextFormikField from "../../components/Formik/TextFormikField";
import { UnsavedBlog } from "../../types";
import blogSchema, { INITIAL_VALUES } from "../../validators/blogSchema";

type BlogCreateProps = Readonly<{
  redirectToHome: () => void;
  addBlog: (unsavedBlog: UnsavedBlog) => Promise<void>;
}>;

const BlogCreate = ({
  redirectToHome,
  addBlog,
}: BlogCreateProps): ReactElement => {
  const onSubmit = async (unsavedBlog: UnsavedBlog): Promise<void> => {
    await addBlog(unsavedBlog);
    redirectToHome();
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={blogSchema}
      initialValues={INITIAL_VALUES}
    >
      <div className="border-2 border-gray-200 my-3">
        <Form>
          <div className="my-5">
            <TextFormikField name="title" label="Blog Title*" />
          </div>
          <div className="my-5">
            <TextFormikField name="content" label="Blog content*" />
          </div>
          <div className="my-5 flex items-stretch">
            <div className="w-24">
              <Button type="submit" label="Add" />
            </div>
            <div className="w-24">
              <Button type="button" label="Cancel" onClick={redirectToHome} />
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default BlogCreate;
