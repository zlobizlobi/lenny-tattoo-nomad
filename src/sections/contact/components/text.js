import styled from "styled-components";
import { breakpoint } from "../../../breakpoints";

export const Text = styled.span`
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: white;
  flex: 0 0 40%;
  font-weight: 900;
  margin: 40px 0 0 0;

  @media ${breakpoint.laptop} {
    font-size: 16px;
    margin: 40px;
  }
`;
