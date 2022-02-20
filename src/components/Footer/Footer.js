import React from "react";
import "./footer.css";
import Contact from "./Contact";

class Footer extends React.Component {
  render() {
    return (
      <div className="container pt-2  bg-dark">
        <p className="title ">Get in Touch </p>
        <div className="d-flex justify-content-between align-items-center ">
          <div>
            <Contact icon='fa fa-envelope' info='eman.salah1295.com'/>
            <Contact icon='fa fa-phone' info='01127266845'/>
          </div>


          <div>
            <i className="fa fa-linkedin px-2"></i>
            <i className="fa fa-github px-2"></i>
            <i className="fa fa-twitter px-2 "></i>
          </div>
          

        </div>
      </div>
    );
  }
}

export default Footer;
