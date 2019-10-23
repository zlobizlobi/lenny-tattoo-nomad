import "firebase/storage";
import * as Scroll from "react-scroll";
import * as React from "react";
import { Container } from "./components";
import { Image, SectionContainer } from "../../components";
import { useGetFirebaseImages } from "./hooks";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export const Gallery = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const [photoIndex, setPhotoIndex] = React.useState(0)

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOnMovePrevRequest = () => {
    setPhotoIndex((photoIndex + firebaseImages.length - 1) % firebaseImages.length)
  }

  const handleOnMoveNextRequest = () => {
    setPhotoIndex((photoIndex + 1) % firebaseImages.length)
  }

  const firebaseImages = useGetFirebaseImages();

  return (
    <SectionContainer>
      <Scroll.Element name="gallery-section">
        <Container>
          {firebaseImages.map((imageUrl) => (
            <Image
              alt="Picture of a Tattoo"
              key={imageUrl}
              src={imageUrl}
              onClick={handleOnClick}
            />
          ))}
          {isOpen && (
            <Lightbox
              mainSrc={firebaseImages[photoIndex]}
              nextSrc={firebaseImages[(photoIndex + 1) % firebaseImages.length]}
              prevSrc={firebaseImages[(photoIndex + firebaseImages.length - 1) % firebaseImages.length]}
              onCloseRequest={handleOnClick}
              onMovePrevRequest={handleOnMovePrevRequest}
              onMoveNextRequest={handleOnMoveNextRequest}
            />
          )}
        </Container>
      </Scroll.Element>
    </SectionContainer>
  );
};
