import React, { Component } from "react";
import '../styles/EducationExperience.css';

class EducationExperience extends Component {
  setInput = (ele) => {
    return {__html: ele};
  }

  render() {

    return(
      <div className="EducationExperience">
        <button id="ee-btn" onClick={this.props.onBtnClicked}>Edit</button>
        <div id="ee-sname" dangerouslySetInnerHTML={this.setInput(this.props.schoolName)}></div>
        <div id="ee-major" dangerouslySetInnerHTML={this.setInput(this.props.major)}></div>
        <div id="ee-graddate" dangerouslySetInnerHTML={this.setInput(this.props.gradDate)}></div>
      </div>
    )
  }
};

export default EducationExperience;