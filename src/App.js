import React from 'react';
import { Banner, About, Gallery, Contact, Faq, Footer } from './sections';
import { Navbar, ScrollToTopButton } from './components';
import { GlobalStyle } from './styles';

import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  flex-direction: column;
`;

const App = () => (
  <AppContainer>
    <GlobalStyle />
    <header>
      <Navbar />
    </header>
    <main>
      <Banner />
      <About />
      <Gallery />
      <Contact />
      <Faq />
      <Footer />
      <ScrollToTopButton
        aria-label="Scroll to to top button"
        name="Scroll to to top button"
      />
    </main>
  </AppContainer>
);

export default App;
