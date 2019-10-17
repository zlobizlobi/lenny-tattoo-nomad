import * as React from "react";
import * as Scroll from "react-scroll";
import { Image, SectionContainer, Text } from "./components"


export const About = () => (
  <Scroll.Element name="about-section">
    <SectionContainer>
      <Image />
      <Text>
        Hey, i'm lenny - a special kind of artist 😂, a travelling tattoo
        artist. I love my work, challenges and fun.
        </Text>
    </SectionContainer>
  </Scroll.Element>
);
