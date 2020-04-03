import React from 'react';
import { ImageContainer, ImageComponent } from './styles';

export const Image = ({ src, onClick, alt }) => (
  <ImageContainer>
    <ImageComponent src={src} onClick={onClick} alt={alt} loading="lazy" />
  </ImageContainer>
);
