import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;

  @media ${breakpoint.laptop} {
    padding: 0px 130px;
    flex-direction: row;
    justify-content: space-evenly;
;
`;
