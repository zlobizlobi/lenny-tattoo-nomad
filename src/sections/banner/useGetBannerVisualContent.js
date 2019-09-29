import * as React from "react";
import { storageReference } from "../../init-firebase";

export const useGetBannerVisualContent = () => {
  const [bannerContent, setWebmSource] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const firebaseUrlWebM = await storageReference
        .ref()
        .child("CuttedVideoCorrectHQ.webm")
        .getDownloadURL();

      setWebmSource(firebaseUrlWebM);
    }

    fetchData();
  }, []);

  return bannerContent;
};
