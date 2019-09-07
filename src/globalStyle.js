import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  body, html {
    margin: 0;
    padding: 0;
    color: white;
    font-family: "Major Mono Display", monospace;

    select, textarea, input, button {
      font-family: inherit;
    }
  }  
`;
