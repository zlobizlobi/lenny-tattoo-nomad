import * as React from "react";
import * as Scroll from "react-scroll";
import { Input, Form, TextArea, SubmitButton } from "../../components";
import {
  Heading,
  Asterix,
  ColumnContainer,
  ContactPageContainer,
  Text,
  FlexContainer
} from "./components";

import styled from "styled-components";

const BotInput = styled(Input)`
  display: none;
`;

export const Contact = () => (
  <Scroll.Element name="contact-section">
    <ContactPageContainer>
      <ColumnContainer>
        <Heading>CONTACT</Heading>
        <FlexContainer>
          <Text>
            <Asterix>*</Asterix>&nbsp;If you want to know more or book an
            appointment, don't be shy to call or send me a message.
          </Text>
          <Form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <BotInput type="text" name="bot-input" title="bot-input" />
            <Input name="name" type="text" title="name" />
            <Input name="email" type="email" title="email" />
            <Input name="subject" type="text" title="subject" />
            <TextArea name="message" autoFocus />
            <SubmitButton>Send me a message</SubmitButton>
          </Form>
        </FlexContainer>
      </ColumnContainer>
    </ContactPageContainer>
  </Scroll.Element>
);
