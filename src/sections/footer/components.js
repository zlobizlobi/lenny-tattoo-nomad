import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const FooterContainer = styled.div`
  background-color: black;
  border-top: 2px dashed darkgrey;
  max-width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  font-size: 10px;
  line-height: 25px;

  @media ${breakpoint.laptop} {
    flex-direction: row;
    padding: 30px 90px;
    justify-content: space-between;
  }
`;

export const Link = styled.a`
  color: white;
  font-weight: 900;
`;

export const Image = styled.div`
  background-image: url("whitelogo.webp");
  backgroun-position: center;
  background-size: cover;
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  margin: 0 0 20px 0;

  @media ${breakpoint.laptop} {
    margin: 0 10px 0 0;
  }
`;

export const FooterTextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  color: darkgrey;
`;
