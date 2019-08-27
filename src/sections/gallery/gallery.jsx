import * as React from "react";
import "firebase/storage";
import Slider from "react-slick";
import { images } from "../../imageUrls";
import { settings } from "./slider-config";
import { Flex } from "@rebass/grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Image = styled.img`
  filter: grayscale(100%);
  border: none;
`;

const GalleryContainer = styled(Flex)`
  padding: 0px 200px;
`;

const Caroussel = styled(Slider)`
  border-radius: 2px;
  width: 100%;
  background-color: none;
  box-shadow: 0 0 2px;
`;

export const Gallery = () => {
  return (
    <section>
      <GalleryContainer justifyContent="center">
        <Caroussel {...settings}>
          {images.map(imageUrl => {
            console.log(imageUrl);
            return <Image alt="lala" key={imageUrl} src={imageUrl} />;
          })}
        </Caroussel>
      </GalleryContainer>
    </section>
  );
};
