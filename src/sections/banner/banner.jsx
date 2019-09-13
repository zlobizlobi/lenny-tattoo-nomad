import * as React from "react";
import "firebase/storage";
import { storageReference } from "../../init-firebase";
import * as Scroll from "react-scroll";
import {
  Video,
  Overlay,
  Logo,
  Container,
  Ornament,
  PlaceHolderContainer,
  PlaceHolderImage
} from "./components";
import { SocialMedia } from "../../components";

export const Banner = () => {
  const [bannerUrl, setBannerUrl] = React.useState({
    webm: "",
    mp4: "",
    whiteLogo: ""
  });

  let firebaseUrlMp4 = "";

  let firebaseUrlWebM = "";

  let firebaseWhiteLogo = "";

  let firebaseOrnament = "";

  React.useEffect(() => {
    async function fetchData() {
      firebaseUrlMp4 = await storageReference
        .child("CuttedVideoCorrectCompressed.mp4")
        .getDownloadURL();

      firebaseUrlWebM = await storageReference
        .child("CuttedVideoCorrectHQ.webm")
        .getDownloadURL();

      firebaseWhiteLogo = await storageReference
        .child("whitelogo.png")
        .getDownloadURL();

      firebaseOrnament = await storageReference
        .child("ornament.png")
        .getDownloadURL();

      setBannerUrl({
        webm: firebaseUrlWebM,
        mp4: firebaseUrlMp4,
        whiteLogo: firebaseWhiteLogo,
        ornament: firebaseOrnament
      });
    }

    fetchData();
  }, [firebaseUrlWebM, firebaseUrlMp4, whiteLogo]);

  const { mp4, webm, whiteLogo, ornament } = bannerUrl;

  return (
    <Scroll.Element name="home-section">
      <section>
        {!whiteLogo && (
          <PlaceHolderContainer>
            <PlaceHolderImage src="logo-white.png" />
          </PlaceHolderContainer>
        )}
        <SocialMedia />
        <Container>
          <Overlay>
            <Logo src={whiteLogo} />
            <Ornament src={ornament} />
            <Video src={mp4 || webm} autoPlay muted loop />
          </Overlay>
        </Container>
      </section>
    </Scroll.Element>
  );
};
