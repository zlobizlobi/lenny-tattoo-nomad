import React from 'react';
import { Nav, Heading, List } from './styles';
import { Flex } from '../flex';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { NavLink } from '../navLink';
import { Anchor } from '../anchor';

const sections = ['Home', 'About', 'Gallery', 'Contact', 'FAQ'];

export const SlideNav = ({ isOpen, onClick }) => (
  <Nav isOpen={isOpen}>
    <Flex flexDir="column">
      <Heading>Menu</Heading>
      <List>
        {sections.map((section, index) => (
          <NavLink onClick={onClick} key={index} section={section} />
        ))}
      </List>
    </Flex>
    <Flex flexDir="column">
      <Heading>Social</Heading>
      <Anchor
        target="_blank"
        rel="noopener"
        aria-label="Go to Linnard Kristovski's Instagram page"
        href="https://www.facebook.com/LennyTattoos/"
      >
        <FaFacebook style={{ color: 'rgba(255,255,255,0.5)' }} />
        <span>facebook.com/LennyTattoos</span>
      </Anchor>
      <Anchor
        target="_blank"
        rel="noopener"
        aria-label="Go to Linnard Kristovski's Instagram page"
        href="https://www.instagram.com/lenny.tattoo/"
      >
        <FaInstagram style={{ color: 'rgba(255,255,255,0.3)' }} />
        <span>instagram.com/lenny.tattoo</span>
      </Anchor>
    </Flex>
  </Nav>
);
