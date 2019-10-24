import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const SectionContainer = styled.section`
  margin: 70px 40px;


  @media ${breakpoint.laptop} {
    margin: 70px 80px;
  }
`;
