import * as React from "react";
import {
  Number,
  Divider,
  Icon,
  SocialMediaContainer,
  Container
} from "./components";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const SocialMedia = () => (
  <SocialMediaContainer>
    <Number href="tel:+ 47 939 39 343">+ 47 93939 343</Number>
    <Divider></Divider>
    <Container>
      <Icon
        component={FaInstagram}
        aria-label="Go to Linnard Kristovski's Instagram page"
        link="https://www.instagram.com/lenny.tattoo/"
      />
      <Icon
        component={FaFacebook}
        aria-label="Go to Linnard Kristovski's Facebook page"
        link="https://www.facebook.com/LennyTattoos/"
      />
    </Container>
  </SocialMediaContainer>
);
