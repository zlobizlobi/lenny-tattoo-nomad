import * as React from "react";
import * as Scroll from "react-scroll";
import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";


export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 36px;
  left: 36px;
  z-index: 3;


  @media ${breakpoint.mobileL}{
    position: absolute;
    top: 25px;
    left: 36px;
  }

`

export const HamburgerBar = styled.span`
    width: 30px;
    height: 2px;
    border-top: 1px solid #fff;
    margin: 4px 0;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.2s ease;

    &:first-child {
        transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
        transform-origin: 0% 100%;
    }
`

export const HamburgerInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 28px;
  height: 28px;
  position: absolute;
  z-index: 10;

  :checked ~ span:nth-last-child(1){
    transform: rotate(-45deg) translate(3px,4px);
  }

  :checked ~ span:nth-last-child(2){
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  
  :checked ~ span:nth-last-child(3){
    transform: rotate(45deg) translate(9px,1px);
  }
`

export const SlideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 150px 0;
  list-style-type: none;
  position: absolute;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  color: #fff;
  box-sizing: border-box;
  margin: 0;
  transform-origin: 0% 0%;
  transition: opacity 0.3s cubic-bezier(0.77,0.2,0.05,1.0);
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
`

export const Container = styled.div`
  display: flex !important;
  justify-content: center;
  width: 100%;
`;

export const SocialContainer = styled.a`
  display: inline-flex;  
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  font-size: 10px;
  animation: all 0.3s ease;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background-color: rgba(255,255,255,0.1);
  padding: 7.5px;
  transition: all 0.3s ease;

  :hover {
    background-color: hsl(0,60%,40%);
    opacity: 1;
  }

  &:last-child{
    margin-left: 10px;
  }
`


export const SocialSpan = styled.span`
  margin-left: 5px;
`

export const MenuLink = ({ section, onClick }) => (
  <li>
    <Scroll.Link onClick={onClick} to={`${section.toLowerCase()}-section`} smooth duration={1100}>
      {section}
    </Scroll.Link>
  </li>
);
