import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 95%;
  @media ${breakpoint.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
