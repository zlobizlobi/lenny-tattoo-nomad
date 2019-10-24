import * as React from "react";
import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

const ImageComponent = styled.img`
  border: 2px solid hsl(0, 60%, 35%);
  margin: 10px 0;
  width: 160px;
  height: 160px;
  cursor: pointer;

  :hover {
    filter: grayscale(0%);
  }

  @media ${breakpoint.mobileL} {
    margin: 5px;
  }
  
`;

export const Image = ({ src, onClick, alt }) => {
  return (
    <ImageComponent
      src={src}
      onClick={onClick}
      alt={alt}
      loading="lazy"
    />
  );
};
