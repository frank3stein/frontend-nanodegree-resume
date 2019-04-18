import React from "react";
import Contacts from "./contacts";

class LetsConnect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="letsConnect" className="dark-gray">
        <h2 className="purple center-text">Let's Connect</h2>
        <ul id="footerContacts" className="flex-box">
          <Contacts contacts={this.props.contacts} />
        </ul>
      </div>
    );
  }
}

export default LetsConnect;
