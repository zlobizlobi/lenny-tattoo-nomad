import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const SectionContainer = styled.section`
  margin: 35px 40px;


  @media ${breakpoint.laptop} {
    margin: 35px 80px;
  }
`;
