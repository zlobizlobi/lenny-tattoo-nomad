import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0px 100px;

  @media ${breakpoint.laptop} {
    flex-direction: row;
    justify-content: space-around;
`;
