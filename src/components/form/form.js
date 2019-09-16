import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoint.tablet} {
    margin: 0;
  }
`;
