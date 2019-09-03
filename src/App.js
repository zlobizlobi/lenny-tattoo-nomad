import React, { Component } from "react";
import { Banner, About, Gallery, Contact } from "./sections";
import "./App.css";
import { Navbar } from "./components";

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Navbar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <main id="page-wrap">
          <Banner />
          <About />
          <Gallery />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
