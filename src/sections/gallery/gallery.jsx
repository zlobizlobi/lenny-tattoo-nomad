import "firebase/storage";
import * as Scroll from "react-scroll";
import * as React from "react";
import { Container, Overlay } from "./components";
import { Image } from "../../components";
import { useGetFirebaseImages } from "./hooks";

export const Gallery = () => {
  const [selections, setSelected] = React.useState([]);

  const handleOnClick = id => {
    setSelected([id]);
  };



  const firebaseImages = useGetFirebaseImages();

  return (
    <Scroll.Element name="gallery-section">
      <Container>
        <Overlay />
        {firebaseImages.map((imageUrl, index) => (
          <Image
            intrinsicSize="100 x 100"
            alt="Picture of a Tattoo"
            isViewed={selections.includes(index)}
            onClick={() => handleOnClick(index)}
            key={imageUrl}
            src={imageUrl}
          />
        ))}
      </Container>
    </Scroll.Element>
  );
};
