import React, { ReactElement } from "react";
import { Field, FieldAttributes, FieldProps, getIn } from "formik";

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
        <input type="text" placeholder={label} {...field} />
      </div>
      {!!validationError && <div>{validationError}</div>}
    </div>
  );
};

const TextFormikField = (
  props: FieldAttributes<TextFormikFieldProps>
): ReactElement => <Field {...props} component={TextField} />;

export default TextFormikField;
