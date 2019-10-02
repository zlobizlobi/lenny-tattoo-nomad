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
                "DOES IT HURT...",
              answer:
                "simple answer is, yes it does. but it’s also very different from person to person - some have a high tolerance for pain, some don’t. no matter what - people always expect worse than it actually is."
            }}
          />
          <FaqComponent
            content={{
              question:
                "HOW MUCH DOES IT COST...",
              answer:
                "each project of a tattoo is very individual and requires personal attention - placement, size, colors, design etc. Therefore it is very hard to say beforehand how much a tattoo will cost. Let's discuss!"
            }}
          />
          <FaqComponent
            content={{
              question:
                "HOW LONG DOES A TATTOO TAKe...",
              answer:
                "tattooing is not a quick process, nor should it be rushed as you will be living with the results permanently. again, depends on the tattoo - contact me!"
            }}
          />
        </FaqComponentContainer>
      </Container>
    </PageContainer>
  </Scroll.Element>
);
