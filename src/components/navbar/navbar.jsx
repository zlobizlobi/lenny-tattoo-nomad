import * as React from "react";
import { Container, MenuLink, SocialContainer, SocialSpan, HamburgerBar, HamburgerInput, HamburgerMenu, SlideMenu, Hamburger } from "./components";
import { FaInstagram, FaFacebook } from "react-icons/fa";


const sections = ["Home", "About", "Gallery", "Contact", "Faq"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  console.log(isOpen)

  return (
    <React.Fragment>
      <Hamburger>
        <HamburgerInput onChange={handleOnClick} checked={isOpen} />
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </Hamburger>
      <SlideMenu isOpen={isOpen}>
        {sections.map((section, index) => (
          <MenuLink onClick={handleOnClick} key={index} section={section} />
        ))}
        <Container>
          <SocialContainer
            target="_blank"
            rel="noopener"
            aria-label="Go to Linnard Kristovski's Instagram page"
            href='https://www.facebook.com/LennyTattoos/'>
            <FaFacebook style={{ display: 'inline-flex' }} />
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
      </SlideMenu>
    </React.Fragment >
  )
}
