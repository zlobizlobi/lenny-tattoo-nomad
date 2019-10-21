import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

export const Number = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

    
  :hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Divider = styled.span`
  transform: rotate(180deg);
  border-top: 1px solid white;
  width: 105px;
  margin: 5px 0;

  @media ${breakpoint.mobileL} {
    transform: rotate(90deg);
    width: 30px;
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 45px;
  justify-content: space-between;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 36px;
  top: 34px;
  
  @media ${breakpoint.mobileL} {
    flex-direction: row;
    align-items: center;
  }
  
`;

export const IconAnchor = styled.a`
  font-size: 18px;
  color: white;
  align-self: center;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255,255,255,0.5);
  }
`;
