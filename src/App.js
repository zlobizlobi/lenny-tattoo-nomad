import React from "react";
import { Banner, About, Gallery, Contact, Faq, Footer } from "./sections";
import { Navbar, ScrollToTopButton } from "./components";
import { GlobalStyle } from "./styles/globalStyle";

import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  aling-items: center;
`;

const App = () => (
  <AppContainer id="outer-container">
    <GlobalStyle />
    <Navbar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
    <main id="page-wrap">
      <Banner />
      <About />
      <Gallery />
      <Contact />
      <Faq />
      <Footer />
      <ScrollToTopButton aria-label="Scroll to to top button" name="Scroll to to top button" />
    </main>
  </AppContainer>
);

export default App;
