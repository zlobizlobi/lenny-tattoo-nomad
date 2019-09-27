import styled from "styled-components";

export const TextAreaComponent = styled.textarea.attrs({ id: "message" })`
  border: 1px dashed white;
  color: white;
  background-color: transparent;
  margin-top: 10px;
  height: 100px;
  width: 220px;
  padding: 10px 0 0 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
