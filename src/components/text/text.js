import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Text = styled.span`
  line-height: 40px;
  text-align: left;
  font-size: 12px;
  max-width: 75%;
  margin-top: 30px;
  align-self: center;
  display: inline-flex;

  @media ${breakpoint.laptop} {
    text-align: left;
    font-size: 16px;
    flex: 0 0 70%;
    align-self: flex-start;
  }
`;
