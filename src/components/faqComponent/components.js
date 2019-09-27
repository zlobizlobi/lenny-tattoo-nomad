import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { breakpoint } from "../../breakpoints";

export const FaqContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin 20px 50px;
  border: 2px solid darkgrey;
  transition: all 0.3s ease;
  
  :hover {
    background-color: white;
    color: black;
  }

  :hover :only-child :nth-child(1) {
    color: black;
  }

  @media ${breakpoint.laptop}{
    margin:  0 50px;
  }

`;

export const FaqText = styled.span`
  line-height: 25px;
  flex-wrap: wrap;
  margin: 10px 0;
  color: darkgrey;
`;
