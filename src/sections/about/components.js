import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Image = styled.div`
  border-radius: 50%;
  background: url("lenny.jpg");
  background-size: cover;
  max-width: 230px;
  width: 230px;
  height: 230px;
  border: 2px solid white;
  margin-bottom: 50px;
  flex-shrink: 0;

  @media ${breakpoint.laptop} {
    margin: 0;
  }
`;

export const Heading = styled.h2`
  margin: 50px 0;
  padding-bottom: 10px;
  border-bottom: 0.5px solid white;
`;

export const PageContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 0 50px;

  @media ${breakpoint.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0 130px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
