import * as React from "react";
import { FaqContainer, FaqText, FaqQuestion } from "./components";

export const FaqComponent = ({ content }) => {
  const { answer, question } = content;
  return (
    <FaqContainer>
      <FaqQuestion>{question}</FaqQuestion>
      <FaqText>{answer}</FaqText>
    </FaqContainer>
  );
};
