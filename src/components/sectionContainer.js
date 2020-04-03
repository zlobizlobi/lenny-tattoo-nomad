import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

export const SectionContainer = styled.section`
  padding: 70px 40px 30px 40px;
  background-color: hsl(0, 60%, 35%);

  ${breakpoints.laptop} {
    padding: 70px 80px;
  }
`;
