import styled from "styled-components";
import { CustomIcon } from "../customIcon";
import { breakpoint } from "../../breakpoints";

export const Number = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  :hover {
    color: #e6e6e6;
  }
`;

export const Icon = styled(CustomIcon)`
  font-size: 22px;
  margin: 0 4px 0 4px;
`;

export const Divider = styled.span`
  transform: rotate(180deg);
  border-top: 1px solid white;
  border-radius: 1px;
  width: 105px;
  margin: 5px 0;

  @media ${breakpoint.mobileL} {
    transform: rotate(90deg);
    width: 30px;
    border-top: 0.5px solid white;
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
  }
`;
