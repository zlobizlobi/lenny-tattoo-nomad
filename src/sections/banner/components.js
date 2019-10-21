import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const Video = styled.video`
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`;

export const Logo = styled.img.attrs({ alt: "Logo of Lenny Tattoo Nomad" })`
  position: relative;
  z-index: 100;
  width: 200px;
  opacity: 0.6;
  margin-top: 60px;
  
  @media ${breakpoint.tablet} {
    width: 350px
  }
`;




export const LogoPlaceHolder = styled.img.attrs({
  alt: "Placeholder Logo Lenny Tattoo Nomad"
})`
  opacity: 0.3;
  width: 200px;
  height: 200px;
`;
