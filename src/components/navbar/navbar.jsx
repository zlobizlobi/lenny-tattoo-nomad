import React, { useState } from 'react';
import { Hamburger } from '../hamburger';
import { SlideNav } from '../slideNav';
import { SocialMedia } from '../socialMedia';
import { Flex } from './styles';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Flex>
        <Hamburger isOpen={isOpen} onChange={handleOnChange}></Hamburger>
        <SocialMedia />
        <SlideNav isOpen={isOpen} onClick={handleOnChange} />
      </Flex>
    </React.Fragment>
  );
};
