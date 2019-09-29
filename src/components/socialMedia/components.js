import styled from "styled-components";
import { breakpoint } from "../../breakpoints";
import { CustomIcon as CustomIconComponent } from "../customIcon";

export const Number = styled.a`
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  transition: color 0.3s ease;
  :hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Divider = styled.span`
  transform: rotate(180deg);
  border-top: 1px solid darkgrey;
  width: 105px;
  margin: 5px 0;

  @media ${breakpoint.mobileL} {
    transform: rotate(90deg);
    width: 30px;
    border-top: 0.5px solid darkgrey;
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  z-index: 1;
  right: 36px;
  top: 34px;

  @media ${breakpoint.mobileL} {
    flex-direction: row;
    align-items: center;
  }
`;

export const CustomIcon = styled(CustomIconComponent)`
  &:hover {
    color: rgb(255, 255, 255, 0.8);
  }
`;
