import styled from "styled-components";
import { breakpoint } from "../../breakpoints";
import { PageContainer } from "../../components";

export const Heading = styled.h2`
  border-bottom: 0.5px solid black;
  padding-bottom: 10px;
`;

export const Asterix = styled.span`
  font-size: 25px;
  font-weight: 900;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  @media ${breakpoint.mobileL} {
    margin: 0;
    align-self: flex-start;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.tablet} {
    flex-direction: row;
  }
`;

export const ContactPageContainer = styled(PageContainer)`
  background-color: white;
  margin: 60px 0;
  color: black;
  padding: 60px 0;
  width: 100%;
  align-self: center;
  @media ${breakpoint.laptop} {
    flex-direction: row;
    margin: 70px 50px;
    box-sizing: content-box;
    max-width: 75%;
    padding: 60px 60px;
    border-radius: 5px;
  }
`;
