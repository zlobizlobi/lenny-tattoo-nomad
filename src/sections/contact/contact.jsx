import * as React from "react";
import * as Scroll from "react-scroll";
import { Input, Form, Text, TextArea, SubmitButton } from "../../components";
import {
  Heading,
  Asterix,
  TextContainer,
  Container,
  ContainerTwo,
  ContactPageContainer
} from "./components";

export const Contact = () => (
  <Scroll.Element name="contact-section">
    <Container>
      <ContactPageContainer>
        <ContainerTwo>
          <Heading>CONTACT</Heading>
          <Container>
            <ContainerTwo>
              <TextContainer>
                <Text>
                  <Asterix>*</Asterix>If you want to know more or book an
                  appointment, don't be shy to call or send me a message.
                </Text>
              </TextContainer>
              <TextContainer>
                <Text>
                  <Asterix>*</Asterix> With 14 years of experience I take on all
                  tattoo styles.
                </Text>
              </TextContainer>
              <TextContainer>
                <Text>
                  <Asterix>*</Asterix> But i specialize in black and grey or
                  color-realistic.
                </Text>
              </TextContainer>
            </ContainerTwo>
            <Form>
              <Input type="text" title="name" />
              <Input type="email" title="email" />
              <Input type="text" title="subject" />
              <TextArea name="message" autoFocus />
              <SubmitButton>Send me a message</SubmitButton>
            </Form>
          </Container>
        </ContainerTwo>
      </ContactPageContainer>
    </Container>
  </Scroll.Element>
);
