import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { FaPhone } from 'react-icons/fa'

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Logo = styled.img.attrs({ alt: "Logo of Lenny Tattoo Nomad" })`
  position: relative;
  z-index: 1;
  width: 200px;
  opacity: 0.6;
  
  @media ${breakpoint.tablet} {
    width: 350px
  }
`;




export const LogoPlaceHolder = styled.img.attrs({
  alt: "Placeholder Logo Lenny Tattoo Nomad"
})`
  opacity: 0.3;
  width: 200px;
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  border: 1px solid white;
  padding: 11px 20px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: hsl(0, 60%, 40%);
  }
`

export const PhoneIcon = styled(FaPhone)`
  margin-left: 10px;
  font-size: 12px;
`