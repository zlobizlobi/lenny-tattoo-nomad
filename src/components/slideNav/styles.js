import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

export const Nav = styled.nav`
  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #000;
  list-style-type: none;
  position: absolute;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  margin: 0;

  ${breakpoints.laptop} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 250px 0;
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Heading = styled.h3`
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  color: rgb(255, 255, 255);
`;
