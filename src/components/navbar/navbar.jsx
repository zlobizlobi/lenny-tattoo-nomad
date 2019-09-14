import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import { Container, MenuLink } from "./components";
import "./hamburger.css"; // This file as only one has a css file, for the rest - use styled components
import { CustomIcon } from "../customIcon";

const sections = ["home", "about", "Gallery", "Contact", "FAQ"];

export const Navbar = () => {
  return (
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
      <ul>
        {sections.map((section, index) => (
          <MenuLink key={index} section={section} />
        ))}
        <Container>
          <CustomIcon
            link="https://www.instagram.com/lenny.tattoo/"
            target="_blank"
            className="fab fa-instagram"
          />
          <CustomIcon
            link="https://www.facebook.com/LennyTattoos/"
            target="_blank"
            className="fab fa-facebook"
          />
        </Container>
      </ul>
    </Menu>
  );
};
