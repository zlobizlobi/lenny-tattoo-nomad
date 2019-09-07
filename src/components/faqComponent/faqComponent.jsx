import * as React from "react";
import {
  FaqContainer,
  ArrowDown,
  Container,
  FaqText,
  ArrowButton,
  HiddenText
} from "./components";

export const FaqComponent = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOnClick = () => {
    setOpen(!isOpen);
  };

  return (
    <FaqContainer isOpen={isOpen}>
      <Container>
        <FaqText> What do you do after you get a tattoo ?</FaqText>
        <ArrowButton onClick={handleOnClick} isOpen={isOpen}>
          <ArrowDown />
        </ArrowButton>
        <HiddenText>You Take Care Of It</HiddenText>
      </Container>
    </FaqContainer>
  );
};
