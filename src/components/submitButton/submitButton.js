import styled from "styled-components";

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
