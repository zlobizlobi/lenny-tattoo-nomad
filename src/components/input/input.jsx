import * as React from "react";
import { InputContainer, InputComponent } from "./components";

export const Input = ({ type, title }) => {
  const titleCapitalized = title.toUpperCase();

  return (
    <InputContainer>
      <label htmlFor={title}>{titleCapitalized}</label>
      <InputComponent type={type} name={title} id={title} />
    </InputContainer>
  );
};

// scroll.scrollToTop();
