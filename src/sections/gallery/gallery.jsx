import * as Scroll from "react-scroll";
import * as React from "react";
import "firebase/storage";
import { Container } from "./components";
import { Image, PageContainer } from "../../components";
import { useGetFirebaseImages } from "./hooks";

export const Gallery = () => {
  const [selections, setSelected] = React.useState([]);

  const galleryRef = React.useRef(null);

  const handleUserKeyPress = event => {
    if (galleryRef.current.contains(event.target)) {
      return;
    }
    setSelected([]);
  };

  const handleOnClick = id => {
    setSelected([id]);
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", handleUserKeyPress, false);

    return () =>
      window.removeEventListener("mousedown", handleUserKeyPress, false);
  }, [handleUserKeyPress]);

  const firebaseImages = useGetFirebaseImages();
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
