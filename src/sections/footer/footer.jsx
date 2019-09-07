import * as React from "react";
import { FooterContainer, Image } from "./components";
import styled from "styled-components";

const Lol = styled.span`
  margin: 0;
`;
export const Footer = () => (
  <FooterContainer>
    <Image />
    <Lol>© Copyright Lenny Tattoo 2019</Lol>
  </FooterContainer>
);
