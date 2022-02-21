import React from "react";
import "./aboutMeSt.css";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="container m-5 row  mx-auto  " ref={(response) => (this.componentRef = response)}>
        <p className="text-dark about col-lg-2 col-md-2  col-12">about me</p>
        <div className='col-lg-10 col-md-10'>
          <p className="text-dark">
            enthusiast lady programmer , joined ITI intensive training , has bachelor Degree in Computer Science 'Helwan University'.
            clever web and mobile front end developer has more than two years of experience in programming work market , hard Worker . 
            can adapt to remote working and working with team in productive environment . 
            i developed a practise ecommerce application in Angular. 
            my ITI graduation Project in team work is Ikea application with React and seperate admin pannel in Angular .
            i built this portfolio with React components and responsive bootstrap , changed the primary color to beige using scss .
            i created a simple movies app using React , used Routing , Api fetching with axios and Redux to manage favourits .
            i created some React native Applications in learning field , renting real estats field , booking clinics field . 
          </p>

          {this.props.printComponent}
          
        </div>
      </div>
    );
  }
}

export default AboutMe;
