import * as React from "react";
import { CustomIcon } from "../../../components";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

const SocialMediaContainer = styled(Flex)`
  position: absolute;
  top: 27px;
  z-index: 1;
  right: 34px;
  color: white;
`;

const Number = styled.a`
  color: white;
  text-decoration: none;
  margin-top: 3px;
  font-weight: 100;
`;

const SMIconBanner = styled(CustomIcon)`
  font-size: 22px;
  margin: 5px 10px 0 0px;
  z-index: 1;
`;

const Divider = styled.span`
  margin: 0px 10px 0px 8px;
  font-size: 28px;
`;

export const SocialMedia = () => {
  return (
    <SocialMediaContainer alignItems="center" justifyContent="center">
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
