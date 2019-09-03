import styled from "styled-components";
import { CustomIcon } from "../../../components";
import { breakpoint } from "../../../breakpoints";

export const Icon = styled(CustomIcon)`
  font-size: 22px;
  margin: 2px 4px 0 4px;

  @media ${breakpoint.mobileL} {
    margin: 0px 4px 0 4px;
  }
`;
