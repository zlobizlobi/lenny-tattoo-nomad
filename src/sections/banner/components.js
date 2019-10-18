import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Video = styled.video`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const Container = styled.div`
  height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`;

export const Logo = styled.img.attrs({ alt: "Logo of Lenny Tattoo Nomad" })`
  position: relative;
  z-index: 100;
  width: 250px;
  opacity: 0.6;
  margin-top: 30px;
  
  @media ${breakpoint.tablet} {
    width: 350px
  }
`;

export const Ornament = styled.img.attrs({ alt: "Ornament Decoration" })`
  position: absolute;
  z-index: 0;
  height: 100%;
  opacity: 0.3;
`;



export const LogoPlaceHolder = styled.img.attrs({
  alt: "Placeholder Logo Lenny Tattoo Nomad"
})`
  opacity: 0.3;
  width: 200px;
  height: 200px;
`;
