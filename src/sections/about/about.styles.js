import { Flex } from "@rebass/grid";
import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Container = styled(Flex)`
  flex-direction: column;
  color: white;
  padding: 60px;

  @media ${breakpoint.mobileM} {
    padding: 100px;
  }

  @media ${breakpoint.laptop} {
    flex-direction: row;
    padding: 200px;
  }
`;

export const Image = styled.div`
  border-radius: 50%;
  background: url("lenny.jpg");
  background-size: cover;
  max-width: 230px;
  width: 230px;
  height: 230px;
  border: 2px solid white;
  margin-bottom: 50px;

  @media ${breakpoint.laptop} {
    flex: 0 0 100%;
  }
`;

export const Text = styled.span`
  line-height: 30px;
  text-align: center;
  margin-left: 15px;
  font-size: 14px;

  @media ${breakpoint.laptop} {
    margin-left: 25px;
    text-align: right;
    font-size: 16px;
  }
`;

//
// flex: 0 0 100%;
// background: url("lenny.jpg");
// background-size: cover;
// background-repeat: no-repeat;
// height: 100%;
// border: 2px solid white;
// margin: 20px 0px;
// max-width: 200px;
