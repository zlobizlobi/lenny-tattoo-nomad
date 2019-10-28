import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { Text as TextComponent } from "../../components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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


export const Input = styled.input`
  border: 2px solid hsl(0, 60%, 40%);
  color: white;
  pointer: cursor;
  padding: 6px 0 5px 15px;
  height: 25px;
  background-color: transparent;
  border-radius: 1px;
  width: 200px;
  transition: all 0.3s ease;
  font-size: 16px;
  margin: 0 0 20px 0;


  &::placeholder {
    color: rgba(255,255,255,0.5);
    font-size: 14px;
  }
`;


export const TextArea = styled.textarea.attrs({ id: "message" })`
  border: 2px dashed hsl(0, 60%, 40%);
  border-radius: 1px;
  color: white;
  background-color: transparent;
  padding: 10px 0 0 10px;
  height: 100px;
  min-width: 250px;
  font-size: 14px;

  &::placeholder {
    color: rgba(255,255,255,0.5);
    font-size: 14px;
  }
`;

export const Form = styled.form.attrs({
  name: "contact",
  method: "post"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${breakpoint.tablet} {
    
    margin: 0;
  }
`;
