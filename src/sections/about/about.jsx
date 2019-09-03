import * as React from "react";
import * as Scroll from "react-scroll";
import { Container, Image } from "./components";
import { Text } from "../../components";
import styled from "styled-components";
import { Flex } from "@rebass/grid";
import { breakpoint } from "../../breakpoints";

const Header = styled.h2`
  font-family: "Major Mono Display", monospace;
  color: white;
  margin: 50px 0;
  padding-bottom: 10px;
  border-bottom: 0.5px solid white;
`;

const ImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakpoint.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;
export const About = () => {
  return (
    <Scroll.Element name="about-section">
      <Container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Header>About</Header>
          <ImageTextContainer>
            <Image />
            <Text>
              Hey, I'm Lenny - a special kind of artist 😂 - a travelling tattoo
              one in fact. I love my work, challenges and fun.
            </Text>
          </ImageTextContainer>
        </Flex>
      </Container>
    </Scroll.Element>
  );
};
