import * as React from "react";
import * as Scroll from "react-scroll";
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
                "Does it hurt?",
              answer:
                "Simple answer is, yes it does. But it’s also very different from person to person - some have a high tolerance for pain, some don’t. But no matter what - people always expect worse than it actually is."
            }}
          />
          <FaqComponent
            content={{
              question:
                "How much does it cost?",
              answer:
                "Each project of a tattoo is very individual - placement, size, colors, design etc. So best just contact me..."
            }}
          />
          <FaqComponent
            content={{
              question:
                "How long does a tattoo take?",
              answer:
                "Tattooing is not a quick process, nor should it be rushed as you will be living with the results permanently. Again, depends on the tattoo - contact me!"
            }}
          />
        </FaqComponentContainer>
      </Container>
    </PageContainer>
  </Scroll.Element>
);
