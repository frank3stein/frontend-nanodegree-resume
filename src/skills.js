import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.skills.map(skill => (
      <li key={skill} className="flex-item">
        <span className="white-text">{skill}</span>
      </li>
    ));
  }
}

export default Skills;
