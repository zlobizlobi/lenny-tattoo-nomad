import * as React from "react";
import { Container, TextAreaComponent } from "./components";
import { Lable } from "../lable";

export const TextArea = () => (
  <Container>
    <Lable htmlFor="message">MESSAGE</Lable>
    <TextAreaComponent />
  </Container>
);
