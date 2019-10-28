import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const Text = styled.span`
  text-align: left;
  font-size: 18px;

  ${breakpoint.laptop} {
    font-size: 20px;
  }
`;
