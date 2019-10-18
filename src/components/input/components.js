import styled from "styled-components";

export const InputComponent = styled.input`
  border: 2px solid hsl(0, 60%, 40%);
  color: white;
  pointer: cursor;
  padding: 6px 0 5px 15px;
  height: 25px;
  margin-top: 10px;
  transition: all 0.3s ease;
  background-color: transparent;
  border-radius: 1px;
  width: 200px;
  font-size: 16px;
  
  &::placeholder {
    color: rgba(255,255,255,0.5);
    font-size: 14px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
  align-self: flex-start;
`;
