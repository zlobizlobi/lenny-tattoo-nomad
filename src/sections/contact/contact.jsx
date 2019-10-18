import * as React from "react";
import * as Scroll from "react-scroll";
import { Input, Form, TextArea, SubmitButton } from "../../components";
import {
  ContactPageContainer,
  Text,
} from "./components";

import styled from "styled-components";

const BotInput = styled(Input)`
  display: none;
`;

export const Contact = () => (
  <Scroll.Element name="contact-section">
    <ContactPageContainer>
      <Text>
        Want to know more or book an
        appointment? Don't be shy to call or send me a message.
      </Text>
      <Form>
        <input type="hidden" name="form-name" value="contact" />
        <BotInput type="text" name="bot-input" title="bot-input" />
        <Input name="name" placeholder="what's your name..." type="text" title="name" />
        <Input name="email" type="email" placeholder="and your e-mail..." title="email" />
        <TextArea name="message" placeholder="Write your message here..." autoFocus />
        <SubmitButton>send</SubmitButton>
      </Form>
    </ContactPageContainer>
  </Scroll.Element>
);
