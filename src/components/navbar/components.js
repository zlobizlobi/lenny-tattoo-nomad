import * as React from "react";
import * as Scroll from "react-scroll";
import { CustomIcon as CustomIconComponent } from "../customIcon";
import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex !important;
  align-self: center;
  justify-content: space-between;
  min-width: 200px;
  margin-top: 25px;
`;

export const SocialContainer = styled.a`
  align-items: center;
  display: flex;
  cursor: pointer;
  animation: all 0.5s ease;
  font-size: 12px;
  text-decoration: none;
  color: hsl(0, 60%, 35%);
  
   &:hover {
    color: white;
  }
`
export const CustomIcon = styled(CustomIconComponent)`
  font-size: 18px;
  color: hsla(0, 60%, 35%, 0.4);
  margin-right: 10px;
  animation: all 0.5s ease;
`;

export const MenuLink = ({ section }) => (
  <li>
    <Scroll.Link to={`${section.toLowerCase()}-section`} smooth duration={1100}>
      <span />
      {section}
      <span />
    </Scroll.Link>
  </li>
);
