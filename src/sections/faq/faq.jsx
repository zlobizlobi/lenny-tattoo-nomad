import * as React from "react";
import { FaqComponent, PageContainer, Heading } from "../../components";

export const Faq = () => (
  <PageContainer>
    <Heading>FAQ</Heading>
    <FaqComponent
      content={{
        question: "Why do you do what you do and why do you do what you do ?",
        answer: "I what I do because I do what I do because I do what I do"
      }}
    />
    <FaqComponent
      content={{
        question: "Why do you do what you do and why do you do what you do ?",
        answer: "I what I do because I do what I do because I do what I do"
      }}
    />
    <FaqComponent
      content={{
        question: "Why do you do what you do and why do you do what you do ?",
        answer: "I what I do because I do what I do because I do what I do"
      }}
    />
  </PageContainer>
);
