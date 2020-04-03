import React from 'react';
import { Container, Input, Bar } from './styles';

export const Hamburger = ({ onChange, isOpen }) => (
  <Container>
    <Input onChange={onChange} checked={isOpen} />
    <Bar />
    <Bar />
    <Bar />
  </Container>
);
