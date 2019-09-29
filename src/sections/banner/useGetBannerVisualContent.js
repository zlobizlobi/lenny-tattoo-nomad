import * as React from "react";
import { storageReference } from "../../init-firebase";

export const useGetBannerVisualContent = () => {
  const [bannerContent, setWebmSource] = React.useState({ webm: "", mp4: "" });

  React.useEffect(() => {
    async function fetchData() {
      const firebaseUrlWebM = await storageReference
        .ref()
        .child("CuttedVideoCorrectHQ.webm")
        .getDownloadURL();

      const firebaseUrlMp4 = await storageReference
        .ref()
        .child("CuttedVideoCorrectCompressed.mp4")
        .getDownloadURL();

      setWebmSource({ webm: firebaseUrlWebM, mp4: firebaseUrlMp4 });
    }

    fetchData();
  }, []);

  return bannerContent;
};
