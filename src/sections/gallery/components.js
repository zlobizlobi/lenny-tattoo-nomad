import styled from "styled-components";
import { Flex } from "@rebass/grid";
import { breakpoint } from "../../breakpoints";

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 85%;
  }
`;
