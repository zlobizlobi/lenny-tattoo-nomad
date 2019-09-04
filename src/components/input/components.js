import styled from "styled-components";
import { Flex } from "@rebass/grid";

export const InputComponent = styled.input`
  border: 0.5px solid white;
  border-radius: 2px;
  color: white;
  pointer: cursor;
  padding: 10px 0 0 10px;
  font-weight: 900;
  height: 20px;
  margin-top: 5px;
  transition: all 0.3s ease;
  background-color: black;
  box-shadow: #a6a6a6 0 1px 3px 0;
  max-width: 80%;

  :focus {
    background-color: grey;
    color: white;
  }
`;

export const InputContainer = styled(Flex)`
  margin: 0 0 20px 0;
`;
