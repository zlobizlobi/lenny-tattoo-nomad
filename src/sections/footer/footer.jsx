import * as React from "react";
import { FooterContainer, Image } from "./components";
import styled from "styled-components";

const FooterText = styled.span`
  margin: 0;
`;

export const Footer = () => (
  <FooterContainer>
    <Image />
    <FooterText>© Copyright Lenny Tattoo 2019</FooterText>
  </FooterContainer>
);
