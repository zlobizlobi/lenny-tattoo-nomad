import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";
import { breakpoint } from "../../breakpoints";

export const Button = styled.button`
  padding: 5px;
  border: 0.5px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  position: fixed;
  bottom: 36px;
  cursor: pointer;
  bottom: 30px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  transition: all 0.5s ease;
  opacity: ${({ isDisplayed }) => (isDisplayed ? "1" : "0")};

  :hover {
    background-color: white;
  }

  :hover :only-child {
    color: black;
    animation: arrowUp 0.3s infinite alternate;

    @keyframes arrowUp {
      from {
        bottom: -2px;
      }
      to {
        bottom: 5px;
      }
    }
  }

  @media ${breakpoint.mobileL} {
    bottom: 36px;
    right: 36px;
    padding: 7px;
  }
`;

export const Arrow = styled(MdKeyboardArrowUp)`
  width: 25px;
  height: 25px;
  position: relative;
  color: white;

  @media ${breakpoint.mobileL} {
    width: 35px;
    height: 35px;
  }
`;
