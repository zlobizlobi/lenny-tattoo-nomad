import * as React from "react";
import { storageReference } from "../../init-firebase";

export const useGetBannerVisualContent = () => {
  const [bannerContent, setWebmSource] = React.useState({
    webm: "",
    whiteLogo: "",
    ornament: ""
  });

  React.useEffect(() => {
    async function fetchData() {
      const firebaseWhiteLogo = await storageReference
        .ref()
        .child("whitelogo.webp")
        .getDownloadURL();

      const firebaseUrlWebM = await storageReference
        .ref()
        .child("CuttedVideoCorrectHQ.webm")
        .getDownloadURL();

      const firebaseOrnament = await storageReference
        .ref()
        .child("ornament.webp")
        .getDownloadURL();

      setWebmSource({
        webm: firebaseUrlWebM,
        whiteLogo: firebaseWhiteLogo,
        ornament: firebaseOrnament
      });
    }

    fetchData();
  }, []);

  return bannerContent;
};
