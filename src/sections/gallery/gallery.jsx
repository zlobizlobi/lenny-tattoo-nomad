import * as Scroll from "react-scroll";
import * as React from "react";
import "firebase/storage";
import { Container } from "./components";
import { Image, PageContainer } from "../../components";
import { storageReference } from "../../init-firebase";

export const Gallery = () => {
  const [selections, setSelected] = React.useState([]);
  const [firebaseImages, setImages] = React.useState([]);
  const galleryRef = React.useRef(null);

  const handleUserKeyPress = event => {
    if (galleryRef.current.contains(event.target)) {
      return;
    }
    setSelected([]);
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", handleUserKeyPress, false);

    return () => {
      window.removeEventListener("mousedown", handleUserKeyPress, false);
    };
  }, [handleUserKeyPress]);

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

  const handleOnClick = id => {
    setSelected([id]);
  };

  return (
    <Scroll.Element name="gallery-section">
      <PageContainer>
        <Container ref={galleryRef}>
          {firebaseImages.map((imageUrl, index) => (
            <Image
              isViewed={selections.includes(index)}
              onClick={() => handleOnClick(index)}
              key={imageUrl}
              src={imageUrl}
            />
          ))}
        </Container>
      </PageContainer>
    </Scroll.Element>
  );
};
