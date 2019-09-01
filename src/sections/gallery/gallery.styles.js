import styled from "styled-components";
import { Flex } from "@rebass/grid";
import { breakpoint } from "../../breakpoints";

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media ${breakpoint.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const Section = styled.section`
  padding: 0;
  display: flex;
  justify-content: center;

  @media ${breakpoint.mobileL} {
    padding: 0 150px;
  }
`;
