import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 80%;

  @media ${breakpoint.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
