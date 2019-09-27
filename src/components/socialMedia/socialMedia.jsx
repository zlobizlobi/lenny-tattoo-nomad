import * as React from "react";
import {
  Number,
  Divider,
  Icon,
  SocialMediaContainer,
  Container
} from "./components";

export const SocialMedia = () => (
  <SocialMediaContainer>
    <Number href="tel:+ 47 939 39 343">+ 47 93939 343</Number>
    <Divider></Divider>
    <Container>
      <Icon
        link="https://www.instagram.com/lenny.tattoo/"
        className="fab fa-instagram"
      />
      <Icon
        link="https://www.facebook.com/LennyTattoos/"
        className="fab fa-facebook"
      />
    </Container>
  </SocialMediaContainer>
);
