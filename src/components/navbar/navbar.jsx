import * as React from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { SocialMediaContainer } from "./navbar.styles";

import "./hamburger.css"; // This file as only one has a css file, for the rest - use styled components
import { CustomIcon } from "../custom-icon";

export const Navbar = () => {
  return (
    <Menu
      isOpen={false}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
    >
      <ul>
        <li>
          <NavLink to="/" exact={true}>
            <span />
            Home
            <span />
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            <span />
            About
            <span />
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery">
            <span />
            Gallery
            <span />
          </NavLink>
        </li>

        <li>
          <NavLink to="/faq">
            <span />
            FAQ
            <span />
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            <span />
            Contact
            <span />
          </NavLink>
        </li>
        <SocialMediaContainer justifyContent="space-between">
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
        </SocialMediaContainer>
      </ul>
    </Menu>
  );
};
