import styled from "styled-components";
import { Flex } from "@rebass/grid";

export const InputComponent = styled.input`
  border: 1px dashed rgba(0, 0, 0, 0.5);
  color: white;
  pointer: cursor;
  outline: none;
  padding: 3px 0 3px 7px;
  height: 25px;
  margin-top: 10px;
  transition: all 0.3s ease;
  background-color: white;
  width: 220px;
  background-color: black;
  :focus {
    color: white;
    background-color: black;
  }
`;

export const InputContainer = styled(Flex)`
  margin: 0 0 30px 0;
`;
