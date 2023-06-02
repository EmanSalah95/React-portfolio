import React from "react";
import "./skillsSt.css";
import ProgressSkill from "./Progress";

class Skills extends React.Component {
  render() {
    let skills=[
      {
        skill:'Angular',
        value:95
      },
      {
        skill:'React',
        value:90
      },
      {
        skill:'React Native',
        value:85
      },
      {
        skill:'flutter',
        value:40
      }
    ];
    return (
      <div className="container py-5 bg-dark">
        <h1 className="text-center">Skills</h1>
        <p className="text-center mx-auto col-8 my-5 text-primary">
           i have wide knowledge in programming Concepts as : OOP , Design Patterns , Data structures , Algorithms , Problem Solving . 
           programming languages as :C# , Java , JS ,ES Next ,TS .
           Design Technologies as: HTML , CSS , sass , bootstrap , material ui , Responsive Design .
           Db management: ERD designing , mapping it to tables , mongo DB , firebase . 
           web Framworks and Tools : Angular , React 'this portfolio' . Mobile Frameworks : Flutter , React Native . unit testing .
        </p>

        <div className="row col-lg-8 col-12 mx-auto mt">
          <div className="col-lg-4 col-12">
            <p>My focous</p>
          </div>

          <div className="col-lg-8 col-12">
            {
              skills.map( (item,index) => <ProgressSkill label={item.skill} perecentage={item.value} key={index}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;


