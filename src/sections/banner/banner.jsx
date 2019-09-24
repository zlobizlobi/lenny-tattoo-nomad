import * as React from "react";
import * as Scroll from "react-scroll";
import "firebase/storage";
import { storageReference } from "../../init-firebase";
import { Video, Overlay, Logo, Container, Ornament } from "./components";
import { SocialMedia } from "../../components";
export const Banner = () => {
  const [bannerUrl, setBannerUrl] = React.useState({
    webm: "",
    mp4: "",
    whiteLogo: "",
    ornament: ""
  });

  let firebaseUrlMp4 = "";

  let firebaseUrlWebM = "";

  let firebaseWhiteLogo = "";

  let firebaseOrnament = "";

  React.useEffect(() => {
    async function fetchData() {
      firebaseUrlMp4 = await storageReference
        .ref()
        .child("CuttedVideoCorrectCompressed.mp4")
        .getDownloadURL();

      firebaseUrlWebM = await storageReference
        .ref()
        .child("CuttedVideoCorrectHQ.webm")
        .getDownloadURL();

      firebaseWhiteLogo = await storageReference
        .ref()
        .child("whitelogo.png")
        .getDownloadURL();

      firebaseOrnament = await storageReference
        .ref()
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
  }, [firebaseOrnament]);

  const { mp4, webm, whiteLogo, ornament } = bannerUrl;

  return (
    <Scroll.Element name="home-section">
      <section>
        <SocialMedia />
        <Container>
          <Overlay>
            <Logo src={whiteLogo} />
            <Ornament src={ornament} />
            <Video
              src={whiteLogo && ornament && (mp4 || webm)}
              autoPlay
              muted
              loop
            />
          </Overlay>
        </Container>
      </section>
    </Scroll.Element>
  );
};
