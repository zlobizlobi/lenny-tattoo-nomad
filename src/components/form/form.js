import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Form = styled.form.attrs({
  ["data-netlify"]: true,
  method: "POST",
  name: "contact"
})`
  margin-top: 60px;

  @media ${breakpoint.tablet} {
  }
`;
