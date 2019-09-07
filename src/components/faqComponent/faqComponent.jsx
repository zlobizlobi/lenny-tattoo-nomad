import * as React from "react";
import { FaqContainer, FaqText } from "./components";

export const FaqComponent = ({ content }) => (
  <FaqContainer>
    <FaqText>{content.question}</FaqText>
    <FaqText>{content.answer.toUpperCase()}</FaqText>
  </FaqContainer>
);
