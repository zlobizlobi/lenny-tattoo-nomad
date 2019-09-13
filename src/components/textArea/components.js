import styled from "styled-components";

export const TextAreaComponent = styled.textarea`
  border: 1px dashed rgba(0, 0, 0, 0.5);
  color: black;
  background-color: white;
  margin-top: 10px;
  height: 100px;
  width: 220px;
  padding: 10px 0 0 10px;

  :focus {
    background-color: black;
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
