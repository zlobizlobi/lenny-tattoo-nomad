import * as React from "react";
import { CustomIcon } from "../../../components";
import styled from "styled-components";
import { Flex } from "@rebass/grid";
import { breakpoint } from "../../../breakpoints";

const SocialMediaContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 34px;
  z-index: 1;
  right: 34px;
  color: white;

  @media ${breakpoint.mobileL} {
    flex-direction: row;
    align-items: center;
  }
`;

const Number = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 900;
`;

const SMIconBanner = styled(CustomIcon)`
  font-size: 22px;
  margin: 2px 4px 0 4px;

  @media ${breakpoint.mobileL} {
    margin: 0px 4px 0 4px;
  }
`;

const Divider = styled.span`
  transform: rotate(180deg);
  border-top: 2px solid white;
  width: 105px;
  margin: 5px 0;
  height: 2px;

  @media ${breakpoint.mobileL} {
    transform: rotate(90deg);
    width: 30px;
  }
`;

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <Number href="tel:+ 47 939 39 343">+ 47 93939 343</Number>
      <Divider></Divider>
      <Flex>
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
      </Flex>
    </SocialMediaContainer>
  );
};
