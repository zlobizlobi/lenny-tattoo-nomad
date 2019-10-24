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
  font-size: 12px;
  animation: all 0.3s ease;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background-color: rgba(255,255,255,0.1);
  padding: 7.5px;
  transition: background-color 0.3s ease;

  :hover {
    background-color: hsl(0,60%,40%);
  }

  &:last-child{
    margin-left: 10px;
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
