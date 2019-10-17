import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const FaqContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 35px 30px;
  border: 2px solid rgba(255,255,255,0.9);
  transition: all 0.3s ease;
  border-radius: 5px;
  margin: 30px 30px;
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
  color: hsl(0,60%, 35%);
  line-height: 35px;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export const FaqQuestion = styled(FaqText)`
line-height: 22px;
margin-top: 0;
font-weight: 700;
font-size: 20px;
`