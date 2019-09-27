import styled from "styled-components";
import { breakpoint } from "../../breakpoints";
import { Text as TextComponent } from "../../components";

export const Asterix = styled.span`
  font-size: 25px;
  font-weight: 900;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactPageContainer = styled.div`
  padding: 70px 0;
  margin: 100px 0;
`;

export const Text = styled(TextComponent)`
  color: white;
  max-width: 450px;
  text-align: center;
  font-size: 16px;
  margin: 10px 30px 60px 30px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${breakpoint.laptop} {
    flex-direction: row;
    justify-content: space-around;
  }
`;
