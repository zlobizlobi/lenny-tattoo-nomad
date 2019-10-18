import * as React from "react";
import { Container, MenuLink, IconAnchor, SocialContainer } from "./components";
import { slide as Menu } from "react-burger-menu";
import "./hamburger.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import styled from 'styled-components'
const SocialSpan = styled.span`
  margin-left: 10px;
`
const sections = ["Home", "About", "Gallery", "Contact", "Faq"];

export const Navbar = () => {

  const [open, setOpen] = React.useState(false);

  const handleOnClick = () => {
    setOpen(!open)
  }

  return (
    <Menu isOpen={open} pageWrapId="page-wrap" outerContainerId="outer-container">
      <ul>
        {sections.map((section, index) => (
          <MenuLink onClick={handleOnClick} key={index} section={section} />
        ))}
      </ul>
      <Container>
        <SocialContainer
          target="_blank"
          rel="noopener"
          ariaLabel="Go to Linnard Kristovski's Instagram page"
          href='https://www.facebook.com/LennyTattoos/'>
          <FaFacebook />
          <SocialSpan>LennyTattoos</SocialSpan>
        </SocialContainer>
        <SocialContainer
          target="_blank"
          rel="noopener"
          aria-label="Go to Linnard Kristovski's Instagram page"
          href="https://www.instagram.com/lenny.tattoo/" >
          <FaInstagram />
          <SocialSpan>lenny.tattoo</SocialSpan>
        </SocialContainer>
      </Container>
    </Menu >
  )
}
