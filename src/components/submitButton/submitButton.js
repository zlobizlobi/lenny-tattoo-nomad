import styled from "styled-components";

export const SubmitButton = styled.button.attrs({ type: "submit" })`
  border: 1px dashed rgba(255, 255, 255, 0.7);
  padding: 10px 10px;
  background-color: black;
  color: white;
  font-family: "Major Mono Display", serif;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 25px;
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
  }
`;
