import * as React from "react";
import { NavLink } from "react-router-dom";
import * as Scroll from "react-scroll";

export const MenuLink = ({ section }) => {
  return (
    <li>
      <Scroll.Link
        to={`${section.toLowerCase()}-section`}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <NavLink to="/" exact={true}>
          <span />
          {section}
          <span />
        </NavLink>
      </Scroll.Link>
    </li>
  );
};
