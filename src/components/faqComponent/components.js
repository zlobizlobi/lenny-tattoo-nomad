import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { breakpoint } from "../../breakpoints";

export const FaqContainer = styled.div`
  padding: 20px;
  margin 0 70px;
  border: 1px dashed rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  height: ${({ isOpen }) => (isOpen ? "100px" : "40px")};
  overflow: hidden;

  :hover {
    background-color: white;
    color: black;
  }

  :hover :only-child :nth-child(1) {
    color: black;
  }
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  width: 30px;
  height: 30px;s
`;

export const ArrowButton = styled.button`
  border: none;
  color: white;
  padding: 0;
  margin: 0 5px;
  background-color: transparent;
  cursor: pointer;
`;

export const FaqText = styled.span`
  line-height: 25px;
  flex-wrap: wrap;
  @media ${breakpoint.mobileL} {
    line-height: 25px;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`;

export const HiddenText = styled.span`
  position: absolute;
  top: 60px;
`;
