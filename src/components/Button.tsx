import React, { ReactElement } from "react";
import styled from "styled-components";

type ButtonType = "button" | "submit";

//TODO: Remove styled.button and work on removing <button> cannot appear as a descendant of <button> console warning
const StyledButton = styled.button`
  button {
    background: transparent;
    border-radius: 3px;
    border: 2px solid #db7093;
    color: #db7093;
    margin: 0 1em;
    padding: 0.25em 1em;
  }
`;

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
