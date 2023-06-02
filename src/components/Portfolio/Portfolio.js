import React from "react";
import "./portfolio.css";
import Project from "./Project";

class Portfolio extends React.Component {
  render() {
    const projects = [
      {
        label:'React',
        link:'https://ikea-clone.vercel.app/home'
      },
      {
        label:'Angular',
        link:'https://e-commerce-sable.vercel.app/Products'
      },
      {
        label:'React Native',
        link:'https://www.youtube.com/watch?v=4_SAC79SPO8&t=16s'
      }
      ,
      {
        label:'Responsive',
        link:'https://social-media-bh84xi4ab-emansalah95.vercel.app/'
      },
      {
        label:'JS Twitter',
        link:'https://youtu.be/ishqGv1OcAs'
      },
      {
        label:'HTML/CSS',
        link:'https://emansalah95.github.io/Movies/'
      }
    ];
    return (
      <div className="container py-5  ">
        <p className="text-dark  portfolio">Projects:</p>

        <div className=" row col-12 mx-auto d-flex flex-wrap justify-content-center">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
