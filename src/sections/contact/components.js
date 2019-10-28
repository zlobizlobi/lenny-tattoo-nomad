import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { Text as TextComponent } from "../../components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint.laptop}{
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

`;

export const Text = styled(TextComponent)`
  color: #fff;
  line-height: 35px;
  margin: 0 0 35px 0;
  max-width: 250px;

  ${breakpoint.laptop} {
    max-width: 300px;
    margin-right: 50px;
  }
`;



