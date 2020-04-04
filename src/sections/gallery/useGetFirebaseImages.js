import { useEffect, useState } from 'react';
import { storageReference } from '../../init-firebase';

export const useGetFirebaseImages = () => {
  const [firebaseImages, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const images = await storageReference.ref('images').listAll();

      const imageUrls = await Promise.all(
        images.items.map(image => image.getDownloadURL())
      );

      setImages(imageUrls);
    }

    fetchData();
  }, []);

  return firebaseImages;
};
