import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Text = styled.span`
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  font-weight: 900;

  @media ${breakpoint.laptop} {
    margin-left: 50px;
    text-align: right;
    font-size: 16px;
  }
`;
