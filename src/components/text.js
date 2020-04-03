import styled from 'styled-components';
import { breakpoints } from '../styles';

export const Text = styled.span`
  text-align: left;
  font-size: 18px;

  ${breakpoints.laptop} {
    font-size: 20px;
  }
`;
