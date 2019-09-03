import * as React from "react";
import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

const ImageComponent = styled.img`
  filter: ${({ isViewed }) => (!isViewed ? "grayscale(100%)" : "none")};
  border: 2px solid white;
  width: ${({ isViewed }) => (isViewed ? "250px" : "180px")}
  height: ${({ isViewed }) => (isViewed ? "250px" : "180px")}
  border-radius: 5px;
  margin: ${({ isViewed }) => (isViewed ? "30px" : "10px")}
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.4) 0s;
  cursor: pointer;

  @media ${breakpoint.mobileL}{
    width: ${({ isViewed }) => (isViewed ? "250px" : "180px")}
    height: ${({ isViewed }) => (isViewed ? "250px" : "180px")}
  }

  :hover{
    filter: grayscale(0%);
  }

`;

export const Image = ({ src, isViewed, onClick }) => {
  return <ImageComponent onClick={onClick} isViewed={isViewed} src={src} />;
};
