import React from "react";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.jpg";
import project5 from "./images/project5.jpg";
import project6 from "./images/project6.jpg";
import svg from "./images/github.svg";

const projectPics = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6
];

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.projects.map((project, i) => (
      <div className="flex-projects" key={project.title}>
        <a href={project.url} target="_blank">
          {project.title}
        </a>
        <p>
          <br />
          {project.description}
          <a className="github-icon" href={project.repo} target="_blank">
            Github Repo
            <img className="github-icon" src={svg} />
          </a>
        </p>
        <a href={project.url} target="_blank">
          <img src={projectPics[i]} />
        </a>
      </div>
    ));
  }
}

export default Projects;
