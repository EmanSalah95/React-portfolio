import React from "react";
import "./portfolio.css";

class Project extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className=" col-lg-3 col-md-3 col-5  bg-dark  m-2 card grey">
        <p>{this.props.label}</p>
      </div>
    );
  }
}

export default Project;
