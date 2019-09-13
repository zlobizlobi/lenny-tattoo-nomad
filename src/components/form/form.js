import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Form = styled.form.attrs({
  ["data-netlify"]: true,
  ["netlify-honeypot"]: "bot-input",
  ["data-netlify-recaptcha"]: true,
  method: "POST",
  name: "Contact Form"
})`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoint.tablet} {
    margin: 0;
  }
`;
