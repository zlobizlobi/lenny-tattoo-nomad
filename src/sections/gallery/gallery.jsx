import 'firebase/storage';
import * as Scroll from 'react-scroll';
import * as React from 'react';
import { Container } from './components';
import { Image, SectionContainer } from '../../components';
import { useGetFirebaseImages } from './hooks';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export const Gallery = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const firebaseImages = useGetFirebaseImages();

  const handleOnClose = () => {
    setIsOpen(!isOpen);
  };

  const handleOnMovePrev = () => {
    setPhotoIndex(
      (photoIndex + firebaseImages.length - 1) % firebaseImages.length
    );
  };

  const handleOnMoveNext = () => {
    setPhotoIndex((photoIndex + 1) % firebaseImages.length);
  };

  return (
    <SectionContainer>
      <Scroll.Element name="gallery-section">
        <Container>
          {firebaseImages.map((imageUrl, index) => (
            <Image
              alt="Picture of a Tattoo"
              key={index}
              src={imageUrl}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(!isOpen);
              }}
            />
          ))}
          {isOpen && (
            <Lightbox
              mainSrc={firebaseImages[photoIndex]}
              nextSrc={firebaseImages[(photoIndex + 1) % firebaseImages.length]}
              prevSrc={
                firebaseImages[
                  (photoIndex + firebaseImages.length - 1) %
                    firebaseImages.length
                ]
              }
              onCloseRequest={handleOnClose}
              onMovePrevRequest={handleOnMovePrev}
              onMoveNextRequest={handleOnMoveNext}
            />
          )}
        </Container>
      </Scroll.Element>
    </SectionContainer>
  );
};
