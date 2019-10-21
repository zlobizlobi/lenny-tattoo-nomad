import * as React from "react";
import * as Scroll from "react-scroll";
import { SectionContainer, Heading } from "../../components";
import { FaqSectionContainer, FaqAndAnswer } from "./components";

export const Faq = () => (
  <SectionContainer>
    <Scroll.Element name="faq-section">
      <Heading>FAQ</Heading>
      <FaqSectionContainer>
        <FaqAndAnswer
          content={{
            question:
              "does it hurt...",
            answer:
              "simple answer is, yes it does. but it’s also very different from person to person - some have a high tolerance for pain, some don’t. No matter what - people always expect worse than it actually is."
          }}
        />
        <FaqAndAnswer
          content={{
            question:
              "how much does it cost...",
            answer:
              "each project of a tattoo is very individual and requires personal attention - placement, size, colors, design etc. Therefore it is very hard to say beforehand how much a tattoo will cost. Let's discuss!"
          }}
        />
        <FaqAndAnswer
          content={{
            question:
              "how long does a tattoo take...",
            answer:
              "tattooing is not a quick process, nor should it be rushed as you will be living with the results permanently. again, depends on the tattoo - contact me!"
          }}
        />
      </FaqSectionContainer>
    </Scroll.Element >
  </SectionContainer >
);
