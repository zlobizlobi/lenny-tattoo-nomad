import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { Text as TextComponent, Heading as HeadingComponent } from '../../components'

export const Image = styled.div`
  border-radius: 50%;
  background: url("lenny.jpg");
  background-size: cover;
  width: 190px;
  height: 190px;
  flex-shrink: 0;
  border: 3px solid hsl(0, 60%, 35%);

  @media ${breakpoint.tablet} {
    width: 230px;
    height: 230px;
  }
  
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled(TextComponent)`
  line-height: 35px;
  text-align: center;
  font-size: 20px;
  color: #fff;  
  
  @media ${breakpoint.laptop} {
    text-align: right;
    line-height: 40px;
    font-size: 25px;
  }
`



export const Highlight = styled.span`
  color: hsl(0,60%,40%);
`

export const ImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoint.laptop}{
    flex-direction: row;
  }
`