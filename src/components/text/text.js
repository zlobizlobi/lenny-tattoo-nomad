import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const Text = styled.span`
  text-align: left;
  font-size: 20px;

  @media ${breakpoint.laptop} {
    font-size: 25px;
  }
`;
