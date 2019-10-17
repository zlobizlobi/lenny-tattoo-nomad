import * as React from "react";
import { InputContainer, InputComponent } from "./components";

export const Input = ({ type, title, className, placeholder }) =>
  <InputContainer className={className}>
    <InputComponent placeholder={placeholder} type={type} name={title} id={title} />
  </InputContainer>
