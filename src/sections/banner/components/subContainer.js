import styled from "styled-components";
import { breakpoint } from "../../../breakpoints";
import { Flex } from "@rebass/grid";

export const SubContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 24px;
  z-index: 1;
  right: 34px;
  color: white;

  @media ${breakpoint.mobileL} {
    flex-direction: row;
    align-items: center;
    top: 34px;
  }
`;
