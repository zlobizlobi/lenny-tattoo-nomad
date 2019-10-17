import * as React from "react";
import { Container, MenuLink, CustomIcon, SocialContainer } from "./components";
import { slide as Menu } from "react-burger-menu";
import "./hamburger.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
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
        <SocialContainer >
          <CustomIcon
            link="https://www.facebook.com/LennyTattoos/"
            target="_blank"
            rel="noopener"
            ariaLabel="Go to Linnard Kristovski's Instagram page"
            component={<FaFacebook />}
          />Facebook</SocialContainer>
        <SocialContainer >
          <CustomIcon
            link="https://www.instagram.com/lenny.tattoo/"
            target="_blank"
            rel="noopener"
            ariaLabel="Go to Linnard Kristovski's Instagram page"
            component={<FaInstagram />}
          />Instagram</SocialContainer>
      </Container>
    </Menu >
  )
}
