import styled from "styled-components";
import { breakpoint } from '../../breakpoints'

export const InputComponent = styled.input`
  border: 1px solid white;
  color: white;
  pointer: cursor;
  padding: 3px 0 3px 7px;
  height: 25px;
  margin-top: 10px;
  transition: all 0.3s ease;
  background-color: transparent;
  border-radius: 5px;
  width: 100%;

  @media ${breakpoint.laptop}{
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;

  label {
    color: white;
  }
`;
