import "firebase/storage";
import * as Scroll from "react-scroll";
import * as React from "react";
import { Container, Overlay } from "./components";
import { Image } from "../../components";
import { useGetFirebaseImages } from "./hooks";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export const Gallery = () => {
  const [selections, setSelected] = React.useState([]);

  const [isOpen, setIsOpen] = React.useState(false)
  const [photoIndex, setPhotoIndex] = React.useState(0)

  const handleOnClick = id => {
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
    <Scroll.Element name="gallery-section">
      <Container>
        {firebaseImages.map((imageUrl, index) => (
          <Image
            intrinsicSize="100 x 100"
            alt="Picture of a Tattoo"
            key={imageUrl}
            src={imageUrl}
            onClick={() => setIsOpen(true)}
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
  );
};
