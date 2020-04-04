import React from 'react';
import * as Scroll from 'react-scroll';
import { Image, Text, Highlight, ImageTextContainer } from './styles';
import { SectionContainer, Heading, ColumnContainer } from '../../components';

export const About = () => (
  <SectionContainer>
    <Scroll.Element name="about-section">
      <ColumnContainer>
        <Heading>About</Heading>
        <ImageTextContainer>
          <Image />
          <Text>
            Hey, i'm Lenny - <Highlight>a travelling tattoo artist</Highlight>{' '}
            <span aria-label="World emoji">&nbsp;🌎&nbsp;</span>. I love my
            work, especially tattooing myself on friends.
          </Text>
        </ImageTextContainer>
      </ColumnContainer>
    </Scroll.Element>
  </SectionContainer>
);
