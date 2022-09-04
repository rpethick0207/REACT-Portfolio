import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

// import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

//Function for Education experince 

function Experience() {

  return (

    <div className="experience">

      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement

          className="vertical-timeline-element--education"

          date="2017-2021"
          
          iconStyle={{ background: "#3e497a", color: "#fff" }}>
          
          <h3 className="vertical-timeline-element-title">

            East Haven Highscool, East Haven, CT

          </h3>
          <p> High School Diploma</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
        
          className="vertical-timeline-element--education"

          date="2022"

          iconStyle={{ background: "#3e497a", color: "#fff" }}
         
        >
          <h3 className="vertical-timeline-element-title">

            UCONN Full Stack Developer Bootcamp

          </h3>

          <h4 className="vertical-timeline-element-subtitle">

            Certification
            
          </h4>


          
        </VerticalTimelineElement>
     
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
