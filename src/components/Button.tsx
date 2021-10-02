import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

type ButtonType = "button" | "submit";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Readonly<{
    label: string;
    type: ButtonType;
  }>;

const Button = ({ label, type, ...props }: ButtonProps): ReactElement => {
  return (
    <StyledButton>
      <button type={type} {...props}>
        {label}
      </button>
    </StyledButton>
  );
};

export default Button;
