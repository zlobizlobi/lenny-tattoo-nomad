import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const Number = styled.span`
  color: white;
  text-decoration: none;
`;

export const Divider = styled.span`
  transform: rotate(180deg);
  border-top: 1px solid white;
  width: 105px;
  height: 0px;
  margin: 5px 0;

  @media ${breakpoint.mobileL} {
    transform: rotate(90deg);
    width: 30px;
    margin: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  right: 36px;
  top: 34px;
  
  @media ${breakpoint.mobileL} {
    flex-direction: row;
    align-items: center;
  }
`;

export const IconAnchor = styled.a`
  display: inline-flex;
  font-size: 16px;
  color: white;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255,255,255,0.5);
  }

  &:first-child{
    margin-right: 5px;
  }
`;
