import React, { Component } from "react";
import '../styles/EducationExperience.css';
import EEWrapper from './controls/EEWrapper.js';
import Button from './controls/Button.js';

class EducationExperience extends Component {
  setInput = (ele) => {
    return {__html: ele};
  }

  render() {

    return(
      <div className="EducationExperience">
        <Button text={this.props.btnTxt} id="ee-btn" onClick={this.props.onBtnClicked} />
        <EEWrapper schoolName={this.props.schoolName} major={this.props.major} gradDate={this.props.gradDate} status={this.props.status} onChange={this.props.onInputChange} />
        <Button text="Add" id="ee-add-btn" onClick={this.props.onAddBtnClicked} />
      </div>
    )
  }
};

export default EducationExperience;