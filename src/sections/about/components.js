import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Image = styled.div`
  border-radius: 50%;
  background: url("lenny.jpg");
  background-size: cover;
  width: 230px;
  height: 230px;
  flex-shrink: 0;
  border: 2px solid white;
  margin: 0 0 20px 0;

  @media ${breakpoint.mobileL} {
    margin: 0 0 20px 0;
  }
`;

export const Heading = styled.h2`
  position: relative;
  margin: 0 0 50px 0;
  padding-bottom: 10px;
  border-bottom: 0.5px solid white;
`;

export const PageContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  @media ${breakpoint.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 100px 0;
`;
