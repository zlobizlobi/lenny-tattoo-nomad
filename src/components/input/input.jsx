import * as React from "react";
import { InputContainer, InputComponent } from "./components";

export const Input = ({ type, title, className }) => {
  const titleCapitalized = title && title.toUpperCase();

  return (
    <InputContainer className={className} flexDirection="column">
      <label htmlFor={title}>{titleCapitalized}</label>
      <InputComponent type={type} name={title} id={title} />
    </InputContainer>
  );
};
