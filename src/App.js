import React from "react";
import Button from "react-bootstrap/Button";

import ReactToPrint from "react-to-print";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log(this.Portfolio);
    let printComponent = (
      <ReactToPrint
        content={() => this.componentRef}
        trigger={() => (
          <Button className="mt-3" variant="dark" size="lg">
            Download resume
          </Button>
        )}
      />
    );
    return (
      <div
        className="container-fluid"
        ref={(response) => (this.componentRef = response)}
      >
        <Header />
        <AboutMe
          portfolioRef={this.componentRef}
          printComponent={printComponent}
        />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
