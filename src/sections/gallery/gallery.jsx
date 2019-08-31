import * as React from "react";
import "firebase/storage";
import { images } from "../../imageUrls";
import { Flex } from "@rebass/grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

const Image = styled.img`
  filter: grayscale(100%);
  border: 2px solid white;
  width: 230px;
  height: 230px;
  border-radius: 2px;
  margin: 10px;
`;

const GalleryContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  @media ${breakpoint.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const GallerySection = styled.section`
  padding: 0 130px;
`;

export const Gallery = () => {
  return (
    <GallerySection>
      <GalleryContainer justifyContent="center">
        {images.map(imageUrl => {
          console.log(imageUrl);
          return <Image alt="lala" key={imageUrl} src={imageUrl} />;
        })}
      </GalleryContainer>
    </GallerySection>
  );
};
