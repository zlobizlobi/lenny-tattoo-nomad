import * as React from "react";
import "firebase/storage";
import { images } from "../../imageUrls";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Section } from "./gallery.styles";

import { Image } from "../../components";

export const Gallery = () => {
  const [selections, setSelected] = React.useState([]);

  const galleryRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("mousedown", handleUserKeyPress, false);

    return () => {
      window.removeEventListener("mousedown", handleUserKeyPress, false);
    };
  }, [handleUserKeyPress]);

  const handleUserKeyPress = event => {
    if (galleryRef.current.contains(event.target)) {
      return;
    }
    setSelected([]);
  };

  const handleOnClick = id => {
    setSelected([id]);
  };

  return (
    <Section>
      <Container ref={galleryRef}>
        {images.map((imageUrl, index) => (
          <Image
            isViewed={selections.includes(index)}
            onClick={() => handleOnClick(index)}
            key={imageUrl}
            src={imageUrl}
          />
        ))}
      </Container>
    </Section>
  );
};
