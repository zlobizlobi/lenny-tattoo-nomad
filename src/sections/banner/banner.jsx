import * as React from "react";
import * as Scroll from "react-scroll";
import "firebase/storage";
import whitelogo from "../../../public/whitelogo.png";
import {
  Video,
  Logo,
  Container,
  LogoPlaceHolder,
  Button,
  PhoneIcon
} from "./components";
import { SocialMedia } from "../../components";
import { useGetBannerVisualContent } from "./useGetBannerVisualContent";




export const Banner = () => {
  const { webm, mp4 } = useGetBannerVisualContent();
  return (
    <section>
      <Scroll.Element name="home-section">
        <Container>
          {!(mp4 || webm) && <LogoPlaceHolder src={whitelogo} git ad />}
          {(mp4 || webm) && (
            <React.Fragment>
              <SocialMedia />
              <Logo src={whitelogo} />
              <Video src={mp4 || webm} autoPlay muted loop />
              <Scroll.Link to='contact-section' smooth duration={1100}>
                <Button>
                  Make an appointment&nbsp;&nbsp;<PhoneIcon />
                </Button>
              </Scroll.Link>
            </React.Fragment>
          )}
        </Container>
      </Scroll.Element >
    </section>
  );
};
