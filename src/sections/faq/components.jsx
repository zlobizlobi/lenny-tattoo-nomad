import * as React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

export const FaqSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.laptop} {
    flex-direction: row;
  }
`;

const FaqAndAnswerContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 35px 30px;
  background-color: white;
  border: 1px solid rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  border-radius: 5px;

  &:nth-child(2) {
    margin: 30px 0;
  }

  ${breakpoints.laptop} {
    &:nth-child(2) {
      margin: 0 30px;
    }
  }
`;

const FaqText = styled.span`
  color: hsl(0, 60%, 35%);
  line-height: 30px;
  flex-wrap: wrap;
  font-size: 18px;
`;

const FaqQuestion = styled(FaqText)`
  color: hsl(0, 60%, 35%);
  margin-bottom: 25px;
  font-weight: 100;
  font-size: 22px;
`;

export const FaqAndAnswer = ({ content }) => {
  const { answer, question } = content;
  return (
    <FaqAndAnswerContainer>
      <FaqQuestion>{question}</FaqQuestion>
      <FaqText>{answer}</FaqText>
    </FaqAndAnswerContainer>
  );
};
