import styled from "styled-components";
import { breakpoint } from "../../breakpoints";
import Call from "@material-ui/icons/Call";

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
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.img`
  position: relative;
  z-index: 100;
  height: 35%;
  min-width: 20%;

  opacity: 0.7;

  @media ${breakpoint.tablet} {
    min-width: 25%;
    height: 65%;
  }
`;

export const Ornament = styled.img`
  position: absolute;
  z-index: 0;
  height: 100%;
  opacity: 0.3;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;
