import * as React from "react";
import "firebase/storage";
import { storageReference } from "../../init-firebase";
import * as Scroll from "react-scroll";
import { Video, Overlay, Logo, Container, Ornament } from "./components";
import { SocialMedia } from "../../components";

export const Banner = () => {
  const [bannerUrl, setBannerUrl] = React.useState({ webm: "", mp4: "" });
  let firebaseUrlMp4 = "";

  let firebaseUrlWebM = "";
  React.useEffect(() => {
    async function fetchData() {
      firebaseUrlMp4 = await storageReference
        .child("CuttedVideoCorrectCompressed.mp4")
        .getDownloadURL();

      firebaseUrlWebM = await storageReference
        .child("CuttedVideoCorrectHQ.webm")
        .getDownloadURL();

      setBannerUrl({ webm: firebaseUrlWebM, mp4: firebaseUrlMp4 });
    }

    fetchData();
  }, [firebaseUrlWebM, firebaseUrlMp4]);

  return (
    <Scroll.Element name="home-section">
      <section>
        <SocialMedia />
        <Container>
          <Overlay>
            <Logo src="logo-white.png" />
            <Ornament src="ornament.png" />
            <Video src={bannerUrl.mp4 || bannerUrl.webm} autoPlay muted loop />
          </Overlay>
        </Container>
      </section>
    </Scroll.Element>
  );
};
