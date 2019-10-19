import * as React from "react";
import * as Scroll from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  display: flex !important;
  justify-content: center;
  width: 100%;
`;

export const SocialContainer = styled.a`
  display: inline-flex;  
  align-items: center;
  cursor: pointer;
  animation: all 0.5s ease;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  color: hsla(0, 60%, 40%, 1);
  background-color: rgba(255,255,255,0.1);
  padding: 5px;
  transition: color 0.3s ease;
  opacity: 0.8;
  :hover {
    color: white;
  }

  &:first-child{
    margin-right: 5px;
  }

  &:last-child{
    margin-left: 5px;
  }
`

export const MenuLink = ({ section }) => (
  <li>
    <Scroll.Link to={`${section.toLowerCase()}-section`} smooth duration={1100}>
      <span />
      {section}
      <span />
    </Scroll.Link>
  </li>
);
