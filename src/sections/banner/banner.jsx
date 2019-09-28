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
  const webm = useGetFirebaseVideos();

  return (
    <Scroll.Element name="home-section">
      <section>
        <SocialMedia />
        <Container>
          {!webm && <LogoPlaceHolder src="logo-white.png" />}
          {webm && (
            <Overlay>
              <Logo src={webm && "logo-white.png"} />
              <Ornament src="ornament.png" />
              <Video src={webm} autoPlay muted loop />
            </Overlay>
          )}
        </Container>
      </section>
    </Scroll.Element>
  );
};
