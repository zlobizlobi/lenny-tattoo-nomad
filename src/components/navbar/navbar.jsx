import * as React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./hamburger.css"; // This file as only one has a css file, for the rest - use styled components

export const Navbar = () => {
  return (
    <Menu
      isOpen={false}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
    >
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" exact={true}>
            <span />
            Home
            <span />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            <span />
            About
            <span />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/gallery">
            <span />
            Gallery
            <span />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/faq">
            <span />
            FAQ
            <span />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            <span />
            Contact
            <span />
          </NavLink>
        </li>
      </ul>
    </Menu>
  );
};
