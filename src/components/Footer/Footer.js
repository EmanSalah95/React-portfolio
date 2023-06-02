import React from "react";
import "./footer.css";
import Contact from "./Contact";

class Footer extends React.Component {

  openInNewTab=(url)=> {
    window.open(url, '_blank').focus();
  } 

  render() {
    const media = [
      {
        icon: 'fa fa-linkedin',
        url: 'https://www.linkedin.com/in/eman-salah-b3290b143',
      },
      {
        icon: 'fa fa-github',
        url: 'https://github.com/hebaghazali/IKEA-Clone',
      },
      {
        icon: 'fa fa-youtube',
        url: 'https://www.youtube.com/@emansalah4042',
      },
    ];

    return (
      <div className="container pt-2  bg-dark">
        <p className="title ">Get in Touch </p>
        <div className="d-flex justify-content-between align-items-center ">
          <div>
            <Contact icon='fa fa-envelope' info='eman.salah1295.com'/>
            <Contact icon='fa fa-phone' info='01127266845'/>
          </div>

          <div>
            {media.map((contact, index) => (
                <i className={`${contact.icon} px-2 font-30`} onClick={()=>this.openInNewTab(contact.url)} ></i>
            ))}
          </div>
        
        </div>
      </div>
    );
  }
}

export default Footer;
