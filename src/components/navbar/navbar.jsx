import * as React from "react";
import styled from "styled-components";
import { Container, MenuLink, CustomIcon } from "./components";
import { slide as Menu } from "react-burger-menu";
import "./hamburger.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const sections = ["home", "about", "Gallery", "Contact", "FAQ"];

const FlexContainer = styled.a`
  display: flex;
`;

export const Navbar = () => (
  <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
    <ul>
      {sections.map((section, index) => (
        <MenuLink key={index} section={section} />
      ))}
    </ul>
    <Container>
      <FlexContainer
        target="_blank"
        rel="noopener"
        href="https://www.instagram.com/lenny.tattoo/"
        aria-label="Go to Linnard Kristovski's Instagram page"
      >
        <CustomIcon
          link="https://www.instagram.com/lenny.tattoo/"
          target="_blank"
          rel="noopener"
          ariaLabel="Go to Linnard Kristovski's Instagram page"
          component={<FaInstagram />}
        />
      </FlexContainer>
      <CustomIcon
        link="https://www.facebook.com/LennyTattoos/"
        target="_blank"
        rel="noopener"
        ariaLabel="Go to Linnard Kristovski's Instagram page"
        component={<FaFacebook />}
      />
    </Container>
  </Menu>
);
