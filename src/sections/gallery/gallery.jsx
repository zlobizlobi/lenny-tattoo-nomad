import * as Scroll from "react-scroll";
import * as React from "react";
import "firebase/storage";
import { Container } from "./components";
import { Image, PageContainer } from "../../components";
import { useGetUserMouseDown, useGetFirebaseImages } from "./hooks";

export const Gallery = () => {
  const galleryRef = React.useRef(null);

  const { selections, handleOnClick } = useGetUserMouseDown(galleryRef);
  const { firebaseImages } = useGetFirebaseImages();

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
