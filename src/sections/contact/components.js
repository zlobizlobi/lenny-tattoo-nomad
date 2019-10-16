import styled from "styled-components";
import { breakpoint } from "../../breakpoints";
import { Text as TextComponent } from "../../components";

export const Asterix = styled.span`
  font-size: 25px;
  font-weight: 900;
`;

export const ContactPageContainer = styled.section`
  display: flex;
  align-self: center;
  flex-direction: column;

  @media ${breakpoint.laptop}{
    flex-direction: row;
  }
`;

export const Text = styled(TextComponent)`
  color: white;
  text-align: left;
  font-size: 16px;
  margin: 10px 30px 30px 30px;
  line-height: 35px;
  @media ${breakpoint.laptop} {
    max-width: 450px;
  }

`;

