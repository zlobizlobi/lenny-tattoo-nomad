import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const FaqContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 35px 30px;
  border: 1px solid rgba(255,255,255,0.9);
  transition: all 0.3s ease;
  border-radius: 5px;
  margin: 30px 30px;
  max-width: 300px;

  :hover {
    background-color: white;

     span:nth-child(2) {
      color: hsl(0, 60%, 40%);
    }
  }

  @media ${breakpoint.laptop}{
    margin: 0 30px;
  }

`;

export const FaqText = styled.span`
  color: rgba(255,255,255,0.8);
  line-height: 35px;
  flex-wrap: wrap;
  margin-top: 35px;
  font-weight: 300;
`;

export const FaqQuestion = styled(FaqText)`
  line-height: 22px;
  color: hsl(0,60%, 35%);
  margin-top: 0;
  font-weight: 700;
  font-size: 20px;
`