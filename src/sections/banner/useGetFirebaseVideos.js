import * as React from "react";
import { storageReference } from "../../init-firebase";

export const useGetFirebaseVideos = () => {
  const [webm, setWebmSource] = React.useState("");

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

  return webm;
};
