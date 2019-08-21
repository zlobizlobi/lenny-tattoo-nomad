import * as React from "react";
import { CustomIcon } from "../../../components";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

const SocialMediaContainer = styled(Flex)`
  position: absolute;
  top: 34px;
  right: 34px;
  color: white;
`;

const Number = styled.a`
  color: white;
  text-decoration: none;
`;

const SMIconBanner = styled(CustomIcon)`
  margin: 0 5px;
  position: relative;
  font-size: 26px;
  z-index: 1;
`;

const Divider = styled.span`
  margin: 0 5px 3px 5px;
  font-size: 27px;
`;

export const SocialMedia = () => {
  return (
    <SocialMediaContainer alignItems="center">
      <Number href="tel:+ 47 939 39 343">+ 47 93939 343</Number>
      <Divider>|</Divider>
      <SMIconBanner
        link="https://www.instagram.com/lenny.tattoo/"
        target="_blank"
        className="fab fa-instagram"
      />
      <SMIconBanner
        link="https://www.facebook.com/LennyTattoos/"
        target="_blank"
        className="fab fa-facebook"
      />
    </SocialMediaContainer>
  );
};
