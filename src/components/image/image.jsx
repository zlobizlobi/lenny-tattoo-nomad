import * as React from "react";
import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

const ImageComponent = styled.img`
  width: 160px;
  height: 160px;
  cursor: pointer;
  filter: grayscale(100%);
  display: block;
  transition: filter 0.2s ease;
  :hover {
    filter: grayscale(0%);
  }
`;

const ImageContainer = styled.div`
  display: inline;
  border: 2px solid hsl(0, 60%, 35%);
  margin: 10px 0;

  ${breakpoint.mobileL} {
    margin: 5px;
  }
`
export const Image = ({ src, onClick, alt }) =>
  <ImageContainer>
    <ImageComponent
      src={src}
      onClick={onClick}
      alt={alt}
      loading="lazy"
    />
  </ImageContainer>
