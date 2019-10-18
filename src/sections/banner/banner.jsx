import * as React from "react";
import * as Scroll from "react-scroll";
import "firebase/storage";
import whitelogo from "../../../public/whitelogo.png";

import { FaPhone } from 'react-icons/fa'
import {
  Video,
  Logo,
  Container,
  Ornament,
  LogoPlaceHolder
} from "./components";
import { SocialMedia } from "../../components";
import { useGetBannerVisualContent } from "./useGetBannerVisualContent";
import styled from 'styled-components'


const Button = styled.button`
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  border: 1px solid white;
  padding: 11px 20px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  z-index: 2;
  transition: all 0.5s ease;

  a {
    transition: all 0.5s ease;
    margin-left: 10px;
    font-size: 16px;
  }

  &:hover {
    background-color: white;
    color: hsl(0, 60%, 40%);

    ~ {
      color: hsl(0, 60%, 40%);
    }
    
  }
`

export const PhoneIcon = styled(FaPhone)`
  margin-left: 10px;
  font-size: 14px;
`

export const Banner = () => {
  const { webm, mp4 } = useGetBannerVisualContent();

  return (
    <Scroll.Element name="home-section">
      <section>
        {!(mp4 || webm) && <LogoPlaceHolder src="whitelogo.png" />}
        {(mp4 || webm) && (
          <Container>
            <SocialMedia />
            <Logo src={whitelogo} />
            <Video src={mp4 || webm} autoPlay muted loop />
            <Button>Make an appointment
            <PhoneIcon />
            </Button>
          </Container>
        )}
      </section>
    </Scroll.Element>
  );
};
