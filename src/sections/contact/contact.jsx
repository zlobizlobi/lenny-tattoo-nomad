import * as React from "react";
import * as Scroll from "react-scroll";
import { Input, Form, PageContainer, Text, TextArea } from "../../components";
import { Flex } from "@rebass/grid";
import { Header } from "./components";

export const Contact = () => (
  <Scroll.Element name="contact-section">
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Header>CONTACT</Header>
      <PageContainer>
        <Text>
          If you want to know more or book an appointment - don't be shy to call
          or send me a message. I've been TATTOOING for over 14 YEARS now. While
          I take on all tattoo styles, I specialize in BLACK AND GREY or
          color-realistic.
        </Text>
        <Form>
          {" "}
          <Input type="text" title="name" placeholder="Name" />
          <Input type="email" title="email" placeholder="E-Mail" />
          <label htmlFor="message">MESSAGE</label>
          <TextArea name="message" autoFocus />
        </Form>
      </PageContainer>
    </Flex>
  </Scroll.Element>
);
