import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";
import { breakpoint } from "../../breakpoints";
import { arrowUp } from "./animations";

export const Button = styled.button.attrs({ name: "Back to to top button" })`
  padding: 5px;
  border: 0.5px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  position: fixed;
  bottom: 36px;
  cursor: pointer;
  bottom: 36px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: ${({ isDisplayed }) => (isDisplayed ? "1" : "0")};

  :hover {
    background-color: white;
  }

  :hover :only-child {
    color: black;
    animation: ${arrowUp} 0.3s infinite alternate;
  }

  @media ${breakpoint.mobileL} {
    bottom: 36px;
    right: 20px;
    padding: 7px;
  }
`;

export const Arrow = styled(MdKeyboardArrowUp)`
  width: 25px;
  height: 25px;
  position: relative;
  color: white;
`;
