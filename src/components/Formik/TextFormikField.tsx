import React, { ReactElement } from "react";
import { Field, FieldAttributes, FieldProps, getIn } from "formik";
import styled from "styled-components";

const Input = styled.input.attrs(() => ({
  type: "text",
  size: "1em",
}))`
  color: #383636;
  font-size: 1em;
  border: 2px solid #30850c;
  border-radius: 5px;
  padding: 1em;
  width: 100%;
`;

type TextFormikFieldProps = Readonly<{
  label: string;
}>;

const TextField = ({
  label,
  field,
  form,
}: TextFormikFieldProps & FieldProps): ReactElement => {
  const validationError =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <div className="mx-5">
      <div>
        <Input type="text" placeholder={label} {...field} />
      </div>
      {!!validationError && (
        <div className="my-2 text-red-600">{validationError}</div>
      )}
    </div>
  );
};

const TextFormikField = (
  props: FieldAttributes<TextFormikFieldProps>
): ReactElement => <Field {...props} component={TextField} />;

export default TextFormikField;
