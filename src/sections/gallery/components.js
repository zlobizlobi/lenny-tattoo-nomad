import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
