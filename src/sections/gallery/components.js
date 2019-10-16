import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 40px;

  @media ${breakpoint.mobileM} {
    flex-direction: row;
    justify-content: center;
    padding: 0 80px;
  }
`;
