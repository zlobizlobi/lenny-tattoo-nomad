import * as React from "react";
import * as Scroll from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex !important;
  align-self: center;
  justify-content: space-between;
  min-width: 200px;
  margin-top: 25px;
`;

export const SocialContainer = styled.a`
  display: flex;  
  align-items: center;
  cursor: pointer;
  animation: all 0.5s ease;
  font-size: 14px;
  text-decoration: none;
  padding: 7px 10px;
  transition: color 0.3s ease;
  color: rgba(255,255,255,0.8);
   
  &:hover  {
    color: rgba(255,255,255,1);

    ~ a  {
      color: rgba(255, 255, 255,0.5);
    } 
    
  }


`
// export const CustomIcon = styled(CustomIconComponent)`
//   font-size: 18px;
//   color: white;
//   margin-right: 10px;
//   color: rgba(255,255,255,0.8);
//   transition: color 0.3s ease;
// `;

export const MenuLink = ({ section }) => (
  <li>
    <Scroll.Link to={`${section.toLowerCase()}-section`} smooth duration={1100}>
      <span />
      {section}
      <span />
    </Scroll.Link>
  </li>
);
