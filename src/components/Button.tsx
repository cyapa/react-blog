import React, { ReactElement } from "react";

type ButtonType = "button" | "submit";

type ButtonProps = Readonly<{
  label: string;
  type: ButtonType;
}>;

const Button = ({ label, type }: ButtonProps): ReactElement => {
  return (
    <div>
      <button type={type}>{label}</button>
    </div>
  );
};

export default Button;
