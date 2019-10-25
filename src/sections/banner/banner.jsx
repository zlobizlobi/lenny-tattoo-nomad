import * as React from "react";
import * as Scroll from "react-scroll";
import whitelogo from "../../../public/whitelogo.png";
import {
  Video,
  Logo,
  Container,
  LogoPlaceHolder,
  Button,
  PhoneIcon
} from "./components";
import { useGetBannerVisualContent } from "./useGetBannerVisualContent";
import { SocialMedia } from "../../components";

export const Banner = () => {
  const { webm, mp4 } = useGetBannerVisualContent();
  return (
    <section>
      <Scroll.Element name="home-section">
        <Container>
          {!(mp4 || webm) && <LogoPlaceHolder src={whitelogo} />}
          {(mp4 || webm) && (
            <React.Fragment>
              <SocialMedia />
              <Logo src={whitelogo} />
              <Video src={mp4 || webm} autoPlay muted loop />
              <Scroll.Link to='contact-section' smooth duration={1100}>
                <Button aria-label="Button to Contact Section">
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
