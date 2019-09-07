import * as React from "react";
import * as Scroll from "react-scroll";

import { Button, Arrow } from "./components";

const scroll = Scroll.animateScroll;

export const ScrollToTopButton = () => {
  const [isDisplayed, setDisplayed] = React.useState(false);

  const handleOnScroll = () => {
    if (window.pageYOffset > 800) {
      return setDisplayed(true);
    }
    return setDisplayed(false);
  };

  const scrollToTop = () => scroll.scrollToTop();

  React.useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  });

  return (
    <Button onClick={scrollToTop} isDisplayed={isDisplayed}>
      <Arrow />
    </Button>
  );
};
