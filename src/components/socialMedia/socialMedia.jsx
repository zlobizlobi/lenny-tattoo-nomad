import * as React from "react";
import {
  Number,
  Divider,
  Container,
  IconAnchor,
  IconContainer
} from "./components";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const SocialMedia = () => (
  <Container>
    <Number href="tel:+ 47 939 39 343">+4793939343</Number>
    <Divider />
    <IconContainer>
      <IconAnchor target="_blank" aria-label="Go to Lenny's Instagram page" href="https://www.instagram.com/lenny.tattoo/">
        <FaInstagram />
      </IconAnchor>
      <IconAnchor target="_blank" aria-label="Go to Lenny's Facebook page" href="https://www.facebook.com/LennyTattoos/">
        <FaFacebook />
      </IconAnchor>
    </IconContainer>
  </Container >
);
