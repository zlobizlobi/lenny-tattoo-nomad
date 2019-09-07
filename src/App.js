import React, { Component } from "react";
import { Banner, About, Gallery, Contact, Faq, Footer } from "./sections";
import "./App.css";
import { Navbar, ScrollToTopButton } from "./components";
import { GlobalStyle } from "./globalStyle";

class App extends Component {
  render() {
    return (
      <div id="outer-container">
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
      </div>
    );
  }
}

export default App;
