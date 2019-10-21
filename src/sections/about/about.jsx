import * as React from "react";
import * as Scroll from "react-scroll";
import { Image, Text, Highlight, Container, ImageTextContainer } from "./components"
import { SectionContainer, Heading } from "../../components";


export const About = () => (
  <SectionContainer>
    <Scroll.Element name="about-section">
      <Container>
        <Heading>About</Heading>
        <ImageTextContainer>
          <Image />
          <Text>
            Hey, i'm lenny - a special kind of artist, <Highlight>a travelling tattoo
            artist</Highlight>. I love my work, challenges and fun.
          </Text>
        </ImageTextContainer>
      </Container>
    </Scroll.Element>
  </SectionContainer >
);
