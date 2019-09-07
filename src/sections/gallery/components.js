import styled from "styled-components";
import { Flex } from "@rebass/grid";
import { breakpoint } from "../../breakpoints";

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${breakpoint.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
