import * as React from "react";
import { Container, MenuLink } from "./components";
import { slide as Menu } from "react-burger-menu";
import "./hamburger.css";
import { CustomIcon } from "../customIcon";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const sections = ["home", "about", "Gallery", "Contact", "FAQ"];

export const Navbar = () => (
  <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
    <ul>
      {sections.map((section, index) => (
        <MenuLink key={index} section={section} />
      ))}
    </ul>
    <Container>
      <CustomIcon
        link="https://www.instagram.com/lenny.tattoo/"
        target="_blank"
        rel="noopener"
        ariaLabel="Go to Linnard Kristovski's Facebook page"
        component={<FaInstagram />}
      />
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
