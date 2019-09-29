import * as React from "react";
import * as Scroll from "react-scroll";

import "firebase/storage";
import {
  Video,
  Overlay,
  Logo,
  Container,
  Ornament,
  LogoPlaceHolder
} from "./components";
import { SocialMedia } from "../../components";
import { useGetBannerVisualContent } from "./useGetBannerVisualContent";

export const Banner = () => {
  const webm = useGetBannerVisualContent();
  return (
    <Scroll.Element name="home-section">
      <section>
        <SocialMedia />
        <Container>
          {!webm && <LogoPlaceHolder src="whitelogo.webp" />}
          {webm && (
            <Overlay>
              <Logo src="whitelogo.webp" />
              <Ornament src="ornament.webp" />
              <Video src={webm} autoPlay muted loop />
            </Overlay>
          )}
        </Container>
      </section>
    </Scroll.Element>
  );
};
