import styled from "styled-components";

export const InputComponent = styled.input`
  border: 1px dashed white;
  color: white;
  pointer: cursor;
  padding: 3px 0 3px 7px;
  height: 25px;
  margin-top: 10px;
  transition: all 0.3s ease;
  background-color: transparent;
  width: 220px;
  border-radius: 2px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;

  label {
    color: white;
  }
`;
