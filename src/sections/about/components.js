import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { Text as TextComponent, ColumnContainer } from '../../components'

export const Image = styled.div`
  border-radius: 50%;
  background: url("lenny.jpg");
  background-size: contain;
  width: 170px;
  height: 170px;
  flex-shrink: 0;
  border: 2px solid hsl(0, 60%, 35%);
  margin: 0 0 30px 0;
  
  ${breakpoint.laptop} {
    width: 170px;
    height: 170px;
    margin: 0 70px 0 0;
  }
`;

export const Text = styled(TextComponent)`
  line-height: 35px;
  text-align: center;
  color: #fff;  
  
  ${breakpoint.laptop} {
    text-align: right;
    line-height: 40px;
    max-width: 550px;
  }
`

export const Highlight = styled.span`
  color: hsl(0,60%,40%);
`

export const ImageTextContainer = styled(ColumnContainer)`
 
  ${breakpoint.laptop}{
    flex-direction: row;
  }
`