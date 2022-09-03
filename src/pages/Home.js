import React from "react";
import "../styles/Home.css";


//Home page content
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Richard</h2>
        <div className="prompt">
          <p>Novice Full Stack Web Developer</p>
        
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJs,HTML,CSS,NPM
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;