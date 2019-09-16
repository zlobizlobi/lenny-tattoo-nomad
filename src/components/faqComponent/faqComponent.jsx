import * as React from "react";
import { FaqContainer, FaqText } from "./components";

export const FaqComponent = ({ content }) => {
  const { answer, question } = content;
  return (
    <FaqContainer>
      <FaqText>{question.toUpperCase()}</FaqText>
      <FaqText>{answer}</FaqText>
    </FaqContainer>
  );
};
