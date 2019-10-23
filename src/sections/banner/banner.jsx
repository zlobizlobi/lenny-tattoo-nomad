import * as React from "react";
import * as Scroll from "react-scroll";
import "firebase/storage";
import whitelogo from "../../../public/whitelogo.png";
import { FaPhone } from 'react-icons/fa'
import {
  Video,
  Logo,
  Container,
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
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: hsl(0, 60%, 40%);
  }
`

export const PhoneIcon = styled(FaPhone)`
  margin-left: 10px;
  font-size: 12px;
  transition: color 0.3s ease;

`

export const Banner = () => {
  const { webm, mp4 } = useGetBannerVisualContent();

  return (
    <Scroll.Element name="home-section">
      <section>
        <Container>
          {!(mp4 || webm) && <LogoPlaceHolder src="whitelogo.png" />}
          {(mp4 || webm) && (
            <React.Fragment>
              <SocialMedia />
              <Logo src={whitelogo} />
              <Video src={mp4 || webm} autoPlay muted loop />
              <Scroll.Link to='contact-section' smooth duration={1100}>
                <Button>Make an appointment
                <PhoneIcon />
                </Button>
              </Scroll.Link>
            </React.Fragment>
          )}
        </Container>
      </section>
    </Scroll.Element >
  );
};
