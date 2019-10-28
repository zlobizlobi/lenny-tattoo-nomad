import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const FooterContainer = styled.div`
  background-color: black;
  border-top: 2px dashed hsl(0, 60%, 35%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  font-size: 10px;
  margin-top: 100px;
  
  ${breakpoint.laptop} {
    flex-direction: row;
    padding: 30px 80px;
    justify-content: flex-start;
  }
`;

export const Link = styled.a`
  color: hsl(0, 60%, 40%);
  font-weight: 900;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 0.5px solid hsl(0, 60%, 40%);
`;

export const Image = styled.div`
  background-image: url("whitelogo.png");
  backgroun-position: center;
  background-size: cover;
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  margin: 0 0 20px 0;

  ${breakpoint.laptop} {
    margin: 0 10px 0 0;
  }
`;

export const FooterTextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  line-height: 25px;
  color: rgba(255,255,255,1);
  word-spacing: 2.5px;
  
  ${breakpoint.laptop} {
    margin-left: 20px;
  }
`;
