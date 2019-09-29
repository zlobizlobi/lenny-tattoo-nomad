import styled, { keyframes } from "styled-components";

// const leftToRight = keyframes`
//   0% {
//     left: 0;
//   }
//   50% {
//     left: 50%;
//   }
//   100% {
//     left: 100%;
//   }
// `;

export const SubmitButton = styled.button.attrs({
  type: "submit",
  name: "Submit form button"
})`
  border: 1px dashed white;
  padding: 10px 10px;
  background-color: transparent;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 25px;

  &:hover {
    background-color: darkgrey;
    color: black;
  }
`;
