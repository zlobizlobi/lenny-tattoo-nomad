import * as React from "react";
import { FaqContainer, FaqText } from "./components";

export const FaqComponent = ({ content }) => (
  <FaqContainer>
    <FaqText>{content.question.toUpperCase()}</FaqText>
    <FaqText>{content.answer}</FaqText>
  </FaqContainer>
);
