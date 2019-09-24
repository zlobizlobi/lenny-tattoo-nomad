import * as React from "react";
import { storageReference } from "../../../init-firebase";

export const useGetFirebaseImages = () => {
  const [firebaseImages, setImages] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const images = await storageReference.ref("images").listAll();
      console.log(images);

      const imageUrls = await images.items.map(async item =>
        item.getDownloadURL().then(result => result)
      );
      setImages(imageUrls);
    }

    fetchData();
  }, []);

  return firebaseImages;
};
