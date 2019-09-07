import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const FooterContainer = styled.div`
  background-color: black;
  border-top: 2px dashed white;
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: columnn;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 20px;
  box-sizing: border-box;
  @media ${breakpoint.laptop} {
    flex-direction: row;
    padding: 30px 90px;
    justify-content: space-between;
  }
`;

export const Image = styled.div`
  background-image: url("logo-white.png");
  backgroun-position: center;
  background-size: cover;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  margin-bottom: 20px;

  @media ${breakpoint.mobileL} {
    margin-right: 20px;
  }
`;
