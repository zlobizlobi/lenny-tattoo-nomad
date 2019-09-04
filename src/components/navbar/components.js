import * as React from "react";
import { NavLink } from "react-router-dom";
import * as Scroll from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid white;
  width: 50px;
  padding-bottom: 25px;
`;

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
