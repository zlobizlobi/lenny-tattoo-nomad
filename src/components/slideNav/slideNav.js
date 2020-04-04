import React from 'react';
import { Nav, Heading, List, Flex, Anchor } from './styles';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import { NavLink } from '../navLink';

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
      <Flex>
        <Anchor
          target="_blank"
          rel="noopener"
          aria-label="Go to Linnard Kristovski's Instagram page"
          href="https://www.facebook.com/LennyTattoos/"
        >
          <FaFacebook
            style={{ color: 'rgba(255,255,255)', fontSize: '18px' }}
          />
        </Anchor>
        <Anchor
          target="_blank"
          rel="noopener"
          aria-label="Go to Linnard Kristovski's Instagram page"
          href="https://www.instagram.com/lenny.tattoo/"
        >
          <FaInstagram
            style={{ color: 'rgba(255,255,255)', fontSize: '18px' }}
          />
        </Anchor>
        <Anchor href="tel:+ 47 939 39 343">
          <FaPhone style={{ color: 'rgba(255,255,255)', fontSize: '18px' }} />
        </Anchor>
      </Flex>
    </Flex>
  </Nav>
);
