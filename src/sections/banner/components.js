import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Video = styled.video`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  background-color: transparent;
`;

export const Logo = styled.img.attrs({ alt: "Logo of Lenny Tattoo Nomad" })`
  position: relative;
  z-index: 100;
  height: 35%;
  min-width: 20%;

  opacity: 0.9;

  @media ${breakpoint.tablet} {
    min-width: 25%;
    height: 65%;
  }
`;

export const Ornament = styled.img.attrs({ alt: "Ornament Decoration" })`
  position: absolute;
  z-index: 0;
  height: 100%;
  opacity: 0.3;
`;

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

export const LogoPlaceHolder = styled.img`
  opacity: 0.3;
  width: 200px;
  height: 200px;
`;
