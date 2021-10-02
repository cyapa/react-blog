import React, { ReactElement } from "react";
import { Form, Formik } from "formik";

import Button from "../../components/Button";
import TextFormikField from "../../components/Formik/TextFormikField";
import blogSchema, { INITIAL_VALUES } from "../../validators/blogSchema";

type BlogCreateProps = Readonly<{
  onCancel: () => void;
}>;

const BlogCreate = ({ onCancel }: BlogCreateProps): ReactElement => {
  const onSubmit = () => {
    console.log("Submit the form");
  };
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={blogSchema}
      initialValues={INITIAL_VALUES}
    >
      <div>
        <Form>
          <TextFormikField name="title" label="Blog Title" />
          <TextFormikField name="content" label="Blog content" />
          <Button type="submit" label="Add" />
          <Button type="button" label="Cancel" onClick={onCancel} />
        </Form>
      </div>
    </Formik>
  );
};

export default BlogCreate;
