import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { Text as TextComponent, ColumnContainer } from '../../components'

export const Image = styled.div`
  border-radius: 50%;
  background: url("lenny.jpg");
  background-size: contain;
  width: 190px;
  height: 190px;
  flex-shrink: 0;
  border: 2px solid hsl(0, 60%, 35%);
  margin-bottom: 30px;
  
  @media ${breakpoint.tablet} {
    width: 230px;
    height: 230px;
    margin-right: 30px;
  }
`;

export const Text = styled(TextComponent)`
  line-height: 35px;
  text-align: center;
  color: #fff;  
  
  @media ${breakpoint.laptop} {
    text-align: right;
    line-height: 40px;
    font-size: 25px;
    max-width: 550px;
  }
`

export const Highlight = styled.span`
  color: hsl(0,60%,40%);
`

export const ImageTextContainer = styled(ColumnContainer)`
 
  @media ${breakpoint.laptop}{
    flex-direction: row;
  }
`