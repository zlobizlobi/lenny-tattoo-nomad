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
  
   ${breakpoint.mobileL}{
    top: 25px;
    left: 36px;
  }
`
export const HamburgerInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 26px;
  height: 26px;
  position: absolute;
  z-index: 1;

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

export const HamburgerBar = styled.span`
    width: 30px;
    height: 2px;
    border-top: 1px solid #fff;
    margin: 4px 0;
    transform-origin: 4px 0px;
    transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.3s ease;

    &:first-child {
        transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
        transform-origin: 0% 100%;
    }
`



export const SlideMenu = styled.nav`
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'}
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  display: flex;
  flex-direction: column;
  align-items: flex-start
  padding: 0 40px;
  justify-content: center;
  background-color: #000;
  list-style-type: none;
  position: absolute;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;


   ${breakpoint.laptop}{
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 250px 0;
  }
`

export const SocialAnchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgba(255,255,255,0.7);
  transition: color 0.2s ease;

  &:last-child {
    margin-top: 15px;
  }

  :hover {
    color: white;
  }
`

export const SocialSpan = styled.span`
  margin-left: 10px;
`

export const List = styled.ul`
  margin: 0; 
  padding: 0;
  list-style-type: none;
`

export const ListItem = styled.li`
  cursor: pointer;
  transition: color 0.3s ease;
  margin-bottom: 20px;
  color: rgba(255,255,255,0.7);
  transition: color 0.2s ease;

  :hover {
    color: white;
  }

  &:last-child{
    margin: 0;
  }
`

export const Heading = styled.h3`
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  color: rgb(255,255,255);
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const SocialMenuContainer = styled(MenuContainer)`
  margin: 50px 0 0 0;
  
   ${breakpoint.laptop}{
    margin-left: 100px;
  }

`
export const MenuLink = ({ section, onClick }) => (
  <ListItem>
    <Scroll.Link onClick={onClick} to={`${section.toLowerCase()}-section`} smooth duration={1100}>
      {section}
    </Scroll.Link>
  </ListItem>
);
