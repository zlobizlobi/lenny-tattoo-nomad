import styled from "styled-components";

export const TextArea = styled.textarea`
  border: 1px solid white;
  border-radius: 2px;
  color: black;
  font-family: "Major Mono Display", monospace;
  padding: 10px;
  font-weight: 900;
  margin-top: 5px;
  outline: none;
  height: 100px;
  width: 250px;

  :focus {
    background-color: black;
    color: white;
  }

  ::placeholder {
    color: white;
    font-weight: 100;
  }
`;
