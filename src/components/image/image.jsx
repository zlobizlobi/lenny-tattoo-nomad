import * as React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../../breakpoints";

const ImageComponent = styled.img.attrs({ loading: "lazy" })`
  border: 2px solid white;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.4) 0s;
  cursor: pointer;
  width: 150px;
  margin: 10px 0;
  height: 150px;
  filter: grayscale(100%);

  ${({ isViewed }) =>
    isViewed &&
    css`
      width: 220px;
      height: 220px;
      filter: grayscale(0%);
    `}

  :hover {
    filter: grayscale(0%);
  }

  @media ${breakpoint.mobileL} {
    margin: 10px;
    ${({ isViewed }) =>
      isViewed &&
      css`
        width: 25px;
        height: 250px;
        filter: grayscale(0%);
        margin: 30px;
      `}
  }
`;

export const Image = ({ src, isViewed, onClick }) => {
  return <ImageComponent onClick={onClick} isViewed={isViewed} src={src} />;
};
