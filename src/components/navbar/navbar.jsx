import * as React from "react";
import { MenuLink, HamburgerBar, HamburgerInput, SlideMenu, Hamburger, MenuContainer, Heading, SocialSpan, SocialAnchor, SocialMenuContainer } from "./components";
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const sections = ["Home", "About", "Gallery", "Contact", "Faq"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <Hamburger>
        <HamburgerInput onChange={handleOnClick} checked={isOpen} />
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </Hamburger>
      <SlideMenu isOpen={isOpen}>
        <MenuContainer>
          <Heading>Menu</Heading>
          <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
            {sections.map((section, index) => (
              <MenuLink onClick={handleOnClick} key={index} section={section} />
            ))}
          </ul>
        </MenuContainer>
        <SocialMenuContainer>
          <Heading>Social</Heading>
          <SocialAnchor target="_blank"
            rel="noopener"
            aria-label="Go to Linnard Kristovski's Instagram page"
            href='https://www.facebook.com/LennyTattoos/' >
            <FaFacebook style={{ color: 'rgba(255,255,255,0.5)' }} />
            <SocialSpan>facebook.com/LennyTattoos</SocialSpan>
          </SocialAnchor>
          <SocialAnchor target="_blank"
            rel="noopener"
            aria-label="Go to Linnard Kristovski's Instagram page"
            href="https://www.instagram.com/lenny.tattoo/" >
            <FaInstagram style={{ color: 'rgba(255,255,255,0.3)' }} />
            <SocialSpan>instagram.com/lenny.tattoo</SocialSpan>
          </SocialAnchor>
        </SocialMenuContainer>
      </SlideMenu>
    </React.Fragment >
  )
}
