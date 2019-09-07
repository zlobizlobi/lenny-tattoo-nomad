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

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
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
  padding: 60px 50px;
  margin: 70px 50px;
  color: black;
  max-width: 80%;
  box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
    0 10px 10px rgba(255, 255, 255, 0.22);
  align-self: center;
`;
