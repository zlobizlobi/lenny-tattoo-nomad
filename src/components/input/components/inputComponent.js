import styled from "styled-components";

export const InputComponent = styled.input`
  border: 0.5px solid white;
  border-radius: 2px;
  color: white;
  outline: none;
  pointer: cursor;
  font-family: "Major Mono Display", monospace;
  padding: 10px;
  font-weight: 900;
  margin-top: 5px;
  transition: all 0.3s ease;
  background-color: black;
  box-shadow: #a6a6a6 0 1px 3px 0;

  :focus {
    background-color: #333333;
    color: white;
  }
`;
