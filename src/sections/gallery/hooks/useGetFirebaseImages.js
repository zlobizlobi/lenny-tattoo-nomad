import * as React from "react";
import { storageReference } from "../../../init-firebase";

export const useGetFirebaseImages = () => {
  const [firebaseImages, setImages] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const images = await storageReference.ref("images").listAll();

      const imageUrls = await Promise.all(
        images.items.map(image => image.getDownloadURL())
      );
      setImages(imageUrls);
    }

    fetchData();
  }, []);

  return firebaseImages;
};
