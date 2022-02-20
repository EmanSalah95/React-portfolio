import React from "react";

class Contact extends React.Component {
  render() {
    return (
         <p><i className={this.props.icon}></i> {this.props.info}</p>
    );
  }
}

export default Contact;
