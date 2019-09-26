import styled from "styled-components";
import { breakpoint } from "../../breakpoints";
import { PageContainer } from "../../components";

export const Heading = styled.h2`
  border-bottom: 0.5px solid white;
  padding-bottom: 10px;
  color: white;
`;

export const Asterix = styled.span`
  font-size: 25px;
  font-weight: 900;
`;

export const TextContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  margin: 20px 0;
  color: white;
  @media ${breakpoint.mobileL} {
    margin: 0;
    justify-content: flex-start;
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
  background-color: darkgrey;
  margin: 60px 0;
  color: black;
  padding: 60px 60px;
  box-sizing: border-box;
  @media ${breakpoint.laptop} {
    flex-direction: row;
    margin: 60px 50px;
    box-sizing: content-box;
  }
`;
