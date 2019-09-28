import * as React from "react";
import { Scroll } from "react-scroll";
import { FaqComponent, PageContainer, Heading } from "../../components";
import { Container, FaqComponentContainer } from "./components";

export const Faq = () => (
  <Scroll.Element name="faq-section">
    <PageContainer>
      <Container>
        <Heading>FAQ</Heading>
        <FaqComponentContainer>
          <FaqComponent
            content={{
              question:
                "Why do you do what you do and why do you do what you do ?",
              answer:
                "i what i do because i do what i do because i do what i do"
            }}
          />
          <FaqComponent
            content={{
              question:
                "Why do you do what you do and why do you do what you do ?",
              answer:
                "i what i do because i do what i do because i do what i do"
            }}
          />
          <FaqComponent
            content={{
              question:
                "Why do you do what you do and why do you do what you do ?",
              answer:
                "i what i do because i do what i do because i do what i do"
            }}
          />
        </FaqComponentContainer>
      </Container>
    </PageContainer>
  </Scroll.Element>
);
