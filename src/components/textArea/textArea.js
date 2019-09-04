import * as React from "react";
import { Container, TextAreaComponent } from "./components";

export const TextArea = () => {
  return (
    <Container>
      <label htmlFor="message">MESSAGE</label>
      <TextAreaComponent />
    </Container>
  );
};
