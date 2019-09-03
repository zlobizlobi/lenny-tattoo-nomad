import * as React from "react";
import * as Scroll from "react-scroll";
import { Input, Form, PageContainer, Text, TextArea } from "../../components";

export const Contact = () => (
  <Scroll.Element name="contact-section">
    <PageContainer>
      <Text>
        If you want to know more or book an appointment - don't be shy to call
        or send me a message. I've been tattooing for over 14 years now. While I
        take on all tattoo styles, I specialize in black and grey or
        color-realistic.
      </Text>
      <Form>
        {" "}
        <Input type="text" title="name" placeholder="Name"></Input>
        <Input type="email" title="email" placeholder="E-Mail"></Input>
        <TextArea name="message" autoFocus></TextArea>
      </Form>
    </PageContainer>
  </Scroll.Element>
);
