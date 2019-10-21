import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const Form = styled.form.attrs({
  name: "contact",
  method: "post",
  ["data-netlify"]: "true",
  ["netlify-honeypot"]: "bot-field"
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoint.tablet} {
    margin: 0;
  }
`;
