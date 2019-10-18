import React from "react";
import { Banner, About, Gallery, Contact, Faq, Footer } from "./sections";
import { Navbar, ScrollToTopButton } from "./components";
import { GlobalStyle } from "./globalStyle";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw; 
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
      <ScrollToTopButton />
    </main>
  </AppContainer>
);

export default App;
