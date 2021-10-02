import React, { ReactElement } from "react";
import { Field, FieldAttributes, FieldProps, getIn } from "formik";
import styled from "styled-components";

const Input = styled.input.attrs(() => ({
  type: "text",
  size: "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  margin: 1em;
  padding: 1em;
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
    <div>
      <div>
        <Input type="text" placeholder={label} {...field} />
      </div>
      {!!validationError && <div>{validationError}</div>}
    </div>
  );
};

const TextFormikField = (
  props: FieldAttributes<TextFormikFieldProps>
): ReactElement => <Field {...props} component={TextField} />;

export default TextFormikField;
