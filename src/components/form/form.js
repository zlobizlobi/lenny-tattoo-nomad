import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Form = styled.form`
  margin-top: 60px;

  @media ${breakpoint.mobileL} {
    margin: 20px;
  }
`;
