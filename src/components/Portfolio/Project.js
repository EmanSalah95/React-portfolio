import React from "react";
import "./portfolio.css";

class Project extends React.Component {
  constructor() {
    super();
  }

   openInNewTab=()=> {
    window.open( this.props.project.link, '_blank').focus();
   } 

  render() {
    return (
      <div href={this.props.project.link} 
      className=" col-lg-3 col-md-3 col-5 bg-dark m-2 card project" 
      onClick={this.openInNewTab}>
        <p>{this.props.project.label}</p>
      </div>
    );
  }
}

export default Project;
