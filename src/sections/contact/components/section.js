import styled from "styled-components";
import { breakpoint } from "../../../breakpoints";

export const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media ${breakpoint.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
