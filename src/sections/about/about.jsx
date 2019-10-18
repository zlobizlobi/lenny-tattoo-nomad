import * as React from "react";
import * as Scroll from "react-scroll";
import { Image, SectionContainer, Text } from "./components"
import { Heading } from "../../components";
import styled from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const About = () => (
  <Scroll.Element name="about-section">
    <ColumnContainer>
      <Heading style={{ marginTop: '100px' }}>About</Heading>
      <SectionContainer>
        <Image />
        <Text>
          Hey, i'm lenny - a special kind of artist 😂, a travelling tattoo
          artist. I love my work, challenges and fun.
        </Text>
      </SectionContainer>
    </ColumnContainer>
  </Scroll.Element>
);
