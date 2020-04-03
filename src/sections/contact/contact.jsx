import * as React from 'react';
import * as Scroll from 'react-scroll';
import {
  SubmitButton,
  SectionContainer,
  Heading,
  ColumnContainer
} from '../../components';
import { Container, Text, TextArea, Form, Input } from './styles';

export const Contact = () => (
  <SectionContainer>
    <Scroll.Element name="contact-section">
      <ColumnContainer>
        <Heading>Contact</Heading>
        <Container>
          <Text>
            Want to know more or book an appointment? Don't be shy to call or
            send me a message.
          </Text>
          <Form data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="bot-input"
              title="bot-input"
              style={{ display: 'none' }}
            />
            <Input
              name="name"
              type="text"
              placeholder="what's your name..."
              title="name"
            />
            <Input
              name="email"
              type="email"
              placeholder="and your e-mail..."
              title="email"
            />
            <TextArea name="message" placeholder="Write your message here..." />
            <SubmitButton>send</SubmitButton>
          </Form>
        </Container>
      </ColumnContainer>
    </Scroll.Element>
  </SectionContainer>
);
