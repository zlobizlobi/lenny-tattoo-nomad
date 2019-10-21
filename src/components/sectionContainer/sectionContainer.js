import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const SectionContainer = styled.section`
  margin: 0 40px;


  @media ${breakpoint.laptop} {
    margin: 0 80px;
  }
`;
