import * as React from "react";
import * as Scroll from "react-scroll";
import { Container, Image } from "./components";
import { Text } from "../../components";

export const About = () => {
  return (
    <Scroll.Element name="about-section">
      <Container alignItems="center" justifyContent="center">
        <Image />
        <Text>
          Hey, I'm Lenny - a special kind of artist 😂 - a travelling tattoo one
          in fact. I love my work, challenges and fun.
        </Text>
      </Container>
    </Scroll.Element>
  );
};
