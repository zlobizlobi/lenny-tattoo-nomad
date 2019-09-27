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
import { useGetFirebaseVideos } from "./useGetFirebaseVideos";

export const Banner = () => {
  const { webm, mp4 } = useGetFirebaseVideos();

  return (
    <Scroll.Element name="home-section">
      <section>
        <SocialMedia />
        <Container>
          {!(webm || mp4) && <LogoPlaceHolder src="logo-white.png" />}
          {(webm || mp4) && (
            <Overlay>
              <Logo src={(webm || mp4) && "logo-white.png"} />
              <Ornament src="ornament.png" />
              <Video src={mp4 || webm} autoPlay muted loop />
            </Overlay>
          )}
        </Container>
      </section>
    </Scroll.Element>
  );
};
