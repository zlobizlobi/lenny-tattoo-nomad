import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const FaqContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 35px 30px;
  border: 2px solid darkgrey;
  transition: all 0.3s ease;
  border-radius: 2px;
  margin: 30px 0;
  max-width: 300px;
  :hover {
    background-color: white;
    color: black;
  }

  :hover :only-child :nth-child(1) {
    color: black;
  }

  @media ${breakpoint.laptop}{
    margin: 0 30px;
  }

`;

export const FaqText = styled.span`
  line-height: 35px;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export const FaqQuestion = styled(FaqText)`
line-height: 22px;
margin-top: 0;
`