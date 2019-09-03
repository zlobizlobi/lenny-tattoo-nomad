import styled from "styled-components";
import { breakpoint } from "../../../breakpoints";

export const Divider = styled.span`
  transform: rotate(180deg);
  border-top: 1px solid white;
  width: 105px;
  margin: 5px 0;
  height: 2px;

  @media ${breakpoint.mobileL} {
    transform: rotate(90deg);
    width: 30px;
    border-top: 0.5px solid white;
  }
`;
