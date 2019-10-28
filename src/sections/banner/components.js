import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { FaPhone } from 'react-icons/fa'

export const Video = styled.video`
  height: 100vh;
  width: 100vw;
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
  margin-top: 100px;

  ${breakpoint.tablet} {
    width: 300px;
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
  border: 0.5px solid white;
  padding: 12px 20px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-weight: 300;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: hsl(0, 60%, 40%);
  }
`

export const PhoneIcon = styled(FaPhone)`
  font-size: 12px;
`