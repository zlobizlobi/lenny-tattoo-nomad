import * as React from "react";
import * as Scroll from "react-scroll";
import {
  Input,
  Form,
  PageContainer,
  Text,
  TextArea,
  SubmitButton
} from "../../components";
import { Heading, Asterix, TextContainer, Container } from "./components";

export const Contact = () => (
  <Scroll.Element name="contact-section">
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>CONTACT</Heading>
      <PageContainer>
        <Text>
          <TextContainer>
            <Asterix>*</Asterix> If you want to know more or book an
            appointment, don't be shy to call or send me a message.
          </TextContainer>
          <TextContainer>
            <Asterix>*</Asterix> With 14 years of experience I take on all
            tattoo styles.
          </TextContainer>
          <TextContainer>
            <Asterix>*</Asterix> But i specialize in black and grey or
            color-realistic.
          </TextContainer>
        </Text>
        <Form>
          <Input type="text" title="name" />
          <Input type="email" title="email" />
          <Input type="text" title="subject" />
          <TextArea name="message" autoFocus />
          <SubmitButton>Send me a message</SubmitButton>
        </Form>
      </PageContainer>
    </Container>
  </Scroll.Element>
);
