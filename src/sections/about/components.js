import styled from "styled-components";
import { breakpoint } from "../../breakpoints";
import { Text as TextComponent } from '../../components'

export const Image = styled.div`
  border-radius: 50%;
  background: url("lenny.jpg");
  background-size: cover;
  width: 190px;
  height: 190px;
  flex-shrink: 0;
  border: 3px solid hsl(0, 60%, 35%);
  margin: 0 0 100px 0;

  @media ${breakpoint.tablet} {
    width: 230px;
    height: 230px;
    margin: 0 35px 0 0;
  }
`;


export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 40px;

  @media ${breakpoint.tablet} {
    flex-direction: row;
    justify-content: center;
    margin: 100px 80px;
  }
`;

export const Text = styled(TextComponent)`
  line-height: 35px;
  text-align: center;
  font-family: 'Josefin Slab', serif;
  font-size: 20px;
  position: relative;
  z-index: 1;
  
  @media ${breakpoint.tablet} {
    text-align: right;
    width: 500px;
    line-height: 40px;
    font-size: 25px;
  }
`