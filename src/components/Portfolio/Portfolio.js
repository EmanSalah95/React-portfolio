import React from "react";
import "./portfolio.css";
import Project from "./Project";

class Portfolio extends React.Component {
  render() {
    const technologies = [
      "ES next",
      "Bootstrap",
      "Angular",
      "React",
      "React Native",
      "Flutter",
    ];

    return (
      <div className="container py-5  ">
        <p className="text-dark  portfolio">Portfolio</p>

        <div className=" row col-12 mx-auto d-flex flex-wrap justify-content-center">
          {technologies.map((tec, index) => (
            <Project key={index} label={tec} />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
