import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const SectionContainer = styled.section`
  margin: 25px 40px;


  @media ${breakpoint.laptop} {
    margin: 25px 80px;
  }
`;
