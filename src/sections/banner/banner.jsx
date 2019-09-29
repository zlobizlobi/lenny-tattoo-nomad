import * as React from "react";
import * as Scroll from "react-scroll";
import whitelogo from "../../../public/whitelogo.png";
import ornament from "../../../public/ornament.png";

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
  const { webm, mp4 } = useGetBannerVisualContent();

  return (
    <Scroll.Element name="home-section">
      <section>
        <SocialMedia />
        <Container>
          {!(mp4 || webm) && <LogoPlaceHolder src="whitelogo.png" />}
          {(mp4 || webm) && (
            <Overlay>
              <Logo src={whitelogo} />
              <Ornament src={ornament} />
              <Video src={mp4 || webm} autoPlay muted loop />
            </Overlay>
          )}
        </Container>
      </section>
    </Scroll.Element>
  );
};
