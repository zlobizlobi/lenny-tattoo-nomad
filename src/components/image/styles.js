import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

export const ImageComponent = styled.img`
  width: 160px;
  height: 160px;
  cursor: pointer;
  display: block;
  transition: filter 0.2s ease;
`;

export const ImageContainer = styled.div`
  display: inline;
  border: 2px solid #fff;
  margin: 10px 0;

  ${breakpoints.mobileL} {
    margin: 5px;
  }
`;
