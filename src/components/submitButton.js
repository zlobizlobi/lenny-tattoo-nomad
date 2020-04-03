import styled from 'styled-components';

export const SubmitButton = styled.button.attrs({
  type: 'submit',
  name: 'Submit form button'
})`
  border: 2px solid hsl(0, 60%, 40%);
  padding: 10px 25px;
  background-color: transparent;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-end;
  font-size: 20px;

  &:hover {
    background-color: hsl(0, 60%, 40%);
    color: black;
  }
`;
