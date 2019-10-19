import { createGlobalStyle } from "styled-components";
import MajorMonoDisplay from "./fonts/MajorMonoDisplay-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family: "Major Mono Display";
    src: url(${MajorMonoDisplay})
  }

  body, html {
      margin: 0;
      padding: 0;
      max-width: 100vw;
      width: 100vw;
      color: white;
      font-family: "Josefin Slab", serif;
            
      select, textarea, input, button {
        font-family: inherit; 
      }
  }  
  
`;
