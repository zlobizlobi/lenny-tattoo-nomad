import * as React from "react";
import { InputContainer, InputComponent } from "./components";
import { Lable } from "../lable";

export const Input = ({ type, title, className }) => {
  const titleCapitalized = title && title.toUpperCase();

  return (
    <InputContainer className={className}>
      <Lable htmlFor={title}>{titleCapitalized}</Lable>
      <InputComponent type={type} name={title} id={title} />
    </InputContainer>
  );
};
