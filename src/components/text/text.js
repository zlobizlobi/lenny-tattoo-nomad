import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Text = styled.span`
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 900;

  @media ${breakpoint.laptop} {
    text-align: left;
    font-size: 16px;
    flex: 0 0 45%;
  }
`;
