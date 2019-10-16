import * as React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../../breakpoints";

const ImageComponent = styled.img`
  border: 2px solid white;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.4) 0s;
  filter: grayscale(100%);
  margin: 10px 0;
  width: 160px;
  height: 160px;

  :hover {
    filter: grayscale(0%);
  }

  @media ${breakpoint.mobileL} {
    margin: 5px;
  }
`;

export const Image = ({ src, isViewed, onClick, alt }) => {
  return (
    <ImageComponent
      alt={alt}
      loading="lazy"
      onClick={onClick}
      isViewed={isViewed}
      src={src}
    />
  );
};
