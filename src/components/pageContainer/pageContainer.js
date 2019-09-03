import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 80px 80px;

  @media ${breakpoint.laptop} {
    padding: 150px 150px;
    flex-direction: row;
    justify-content: space-around;
`;
