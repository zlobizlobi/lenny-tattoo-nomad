import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

export const FaqContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin 0 70px;
  border: 1px dashed rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  overflow: hidden;
  min-height: 100px;

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
  height: 30px;
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
`;
