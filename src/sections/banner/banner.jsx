import * as React from "react";
import { Scroll } from "react-scroll";

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
  const { webm, whiteLogo, ornament } = useGetBannerVisualContent();

  return (
    <Scroll.Element name="home-section">
      <section>
        <SocialMedia />
        <Container>
          {!whiteLogo && (
            <LogoPlaceHolder
              alt="Placeholder Logo Lenny Tattoo Nomad"
              src={whiteLogo}
            />
          )}
          {webm && (
            <Overlay>
              <Logo src={whiteLogo} />
              <Ornament src={ornament} />
              <Video src={webm} autoPlay muted loop />
            </Overlay>
          )}
        </Container>
      </section>
    </Scroll.Element>
  );
};
