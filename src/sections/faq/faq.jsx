import * as React from "react";
import { FaqComponent, PageContainer, Heading } from "../../components";
import { Container, FaqComponentContainer } from "./components";

export const Faq = () => (
  <PageContainer>
    <Container>
      <FaqComponentContainer>
        <FaqComponent
          content={{
            question:
              "Why do you do what you do and why do you do what you do ?",
            answer: "i what i do because i do what i do because i do what i do"
          }}
        />
        <FaqComponent
          content={{
            question:
              "Why do you do what you do and why do you do what you do ?",
            answer: "i what i do because i do what i do because i do what i do"
          }}
        />
        <FaqComponent
          content={{
            question:
              "Why do you do what you do and why do you do what you do ?",
            answer: "i what i do because i do what i do because i do what i do"
          }}
        />
      </FaqComponentContainer>
    </Container>
  </PageContainer>
);
