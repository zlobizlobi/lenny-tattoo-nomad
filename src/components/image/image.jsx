import * as React from "react";
import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

const ImageComponent = styled.img`
  border: 2px solid hsl(0, 60%, 35%);
  margin: 10px 0;
  width: 160px;
  height: 160px;
  box-sizing: content-box;

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
