import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Text = styled.span`
  line-height: 40px;
  text-align: left;
  font-size: 12px;
  max-width: 75%;
  height: 100%;
  margin-top: 30px;
  @media ${breakpoint.laptop} {
    text-align: left;
    font-size: 16px;
    flex: 0 0 45%;
  }
`;
