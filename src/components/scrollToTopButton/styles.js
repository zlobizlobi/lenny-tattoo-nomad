import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { breakpoints } from '../../styles/breakpoints';
import { arrowUp } from './animations';

export const Button = styled.button`
  padding: 5px;
  border: none;
  border-radius: 50%;
  position: fixed;
  bottom: 36px;
  cursor: pointer;
  bottom: 36px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: all 0.5s ease;
  opacity: ${({ isDisplayed }) => (isDisplayed ? '1' : '0')};

  :hover {
    background-color: white;
  }

  :hover :only-child {
    color: hsl(0, 60%, 35%);
    animation: ${arrowUp} 0.3s infinite alternate;
  }

  ${breakpoints.mobileL} {
    bottom: 36px;
    right: 20px;
    padding: 7px;
  }
`;

export const Arrow = styled(MdKeyboardArrowUp)`
  width: 25px;
  height: 25px;
  position: relative;
  color: hsl(0, 60%, 35%);
`;
