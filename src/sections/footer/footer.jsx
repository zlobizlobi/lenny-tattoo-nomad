import React from 'react';
import { FooterContainer, Image, FooterTextContainer, Link } from './styles';

export const Footer = () => (
  <FooterContainer>
    <Image />
    <FooterTextContainer>
      <span>© Copyright Lenny Tattoo 2019</span>
      <span>
        Made by <Link href="https://www.github.com/zlobizlobi">zlobizlobi</Link>
      </span>
    </FooterTextContainer>
  </FooterContainer>
);
