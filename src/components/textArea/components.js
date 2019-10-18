import styled from "styled-components";

export const TextAreaComponent = styled.textarea.attrs({ id: "message" })`
  border: 2px dashed hsl(0, 60%, 40%);
  border-radius: 1px;
  color: white;
  background-color: transparent;
  margin-top: 10px;
  padding: 10px 0 0 10px;
  height: 100px;
  min-width: 250px;
  font-size: 14px;

  &::placeholder {
    color: rgba(255,255,255,0.5);
    font-size: 14px;
  }
`;
