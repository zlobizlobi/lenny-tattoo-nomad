import * as React from "react";
import { storageReference } from "../../init-firebase";

export const useGetFirebaseVideos = () => {
  const [bannerUrls, setBannerUrls] = React.useState({
    webm: "",
    mp4: ""
  });

  React.useEffect(() => {
    async function fetchData() {
      const firebaseUrlMp4 = await storageReference
        .ref()
        .child("CuttedVideoCorrectCompressed.mp4")
        .getDownloadURL();

      const firebaseUrlWebM = await storageReference
        .ref()
        .child("CuttedVideoCorrectHQ.webm")
        .getDownloadURL();

      setBannerUrls({
        webm: firebaseUrlWebM,
        mp4: firebaseUrlMp4
      });
    }

    fetchData();
  }, []);

  return bannerUrls;
};
