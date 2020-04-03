import * as React from 'react';
import { Divider, Container, Anchor } from './styles';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Flex } from '../flex';

export const SocialMedia = () => (
  <Container flexDir="column">
    <Anchor href="tel:+ 47 939 39 343">+4793939343</Anchor>
    <Divider />
    <Flex>
      <Anchor
        target="_blank"
        aria-label="Go to Lenny's Instagram page"
        href="https://www.instagram.com/lenny.tattoo/"
      >
        <FaInstagram />
      </Anchor>
      <Anchor
        target="_blank"
        aria-label="Go to Lenny's Facebook page"
        href="https://www.facebook.com/LennyTattoos/"
      >
        <FaFacebook />
      </Anchor>
    </Flex>
  </Container>
);
