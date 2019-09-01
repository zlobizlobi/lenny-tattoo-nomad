import * as React from "react";
import * as Scroll from "react-scroll";
import { Container, Image, Text } from "./about.styles";

export const About = () => {
  return (
    <Scroll.Element name="about-section">
      <Container alignItems="center" justifyContent="center">
        <Image />
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here'. It is a
          long established fact that a reader will be distracted by the readable
        </Text>
      </Container>
    </Scroll.Element>
  );
};
