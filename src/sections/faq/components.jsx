import * as React from "react";
import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const FaqSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media ${breakpoint.laptop} {
    flex-direction: row;
  }
`;

const FaqAndAnswerContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 35px 30px;
  border: 1px solid rgba(255,255,255,0.9);
  transition: all 0.3s ease;
  border-radius: 5px;
  
  &:nth-child(2) {
    margin: 30px 0;
  }

  :hover {
    
    background-color: white;

    span:nth-child(2) {
      color: hsl(0, 60%, 40%);
    }

  }

  @media ${breakpoint.laptop}{
  
  &:nth-child(2) {
    margin: 0 30px;
  }
}
`;

const FaqText = styled.span`
  color: rgba(255,255,255,0.8);
  line-height: 35px;
  flex-wrap: wrap;
  margin-top: 35px;
  font-weight: 300;
  padding-bottom: 35px;
`

const FaqQuestion = styled(FaqText)`
  line-height: 22px;
  color: hsl(0,60%, 35%);
  margin-top: 0;
  font-weight: 700;
  font-size: 20px;
`

export const FaqAndAnswer = ({ content }) => {
  const { answer, question } = content;
  return (
    <FaqAndAnswerContainer>
      <FaqQuestion>{question}</FaqQuestion>
      <FaqText>{answer}</FaqText>
    </FaqAndAnswerContainer>
  );
};
