import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const Form = styled.form.attrs({
  name: "contact",
  method: "post"
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint.tablet} {
    margin: 0;
  }
`;
