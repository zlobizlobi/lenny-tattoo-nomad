import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { Flex } from '../../components';

export const FooterContainer = styled(Flex)`
  background-color: black;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  font-size: 10px;

  ${breakpoints.laptop} {
    flex-direction: row;
    padding: 30px 80px;
    justify-content: flex-start;
  }
`;

export const Link = styled.a`
  color: hsl(0, 60%, 40%);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid hsl(0, 60%, 40%);
`;

export const Image = styled.div`
  background-image: url('whitelogo.png');
  background-position: center;
  background-size: cover;
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  margin-bottom: 20px;

  ${breakpoints.laptop} {
    margin: 0 20px 0 0;
  }
`;

export const FooterTextContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  line-height: 25px;
  color: #fff;
  word-spacing: 2.5px;

  ${breakpoints.laptop} {
    align-items: flex-start;
  }
`;
