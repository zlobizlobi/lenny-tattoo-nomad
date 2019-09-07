import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaqComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakpoint.laptop} {
    flex-direction: row;
  }
`;
