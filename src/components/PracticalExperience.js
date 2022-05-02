import React, { Component } from "react";
import '../styles/PracticalExperience.css';
import Button from './controls/Button.js';
import PEWrapper from './controls/PEWrapper.js';

class PracticalExperience extends Component {
  render() {

    return(
      <div className="PracticalExperience">
        <Button text={this.props.btnTxt} id="pe-btn" onClick={this.props.onBtnClicked} />
        <PEWrapper companyName={this.props.companyName} positionTitle={this.props.positionTitle} mainTasks={this.props.mainTasks} startDate={this.props.dateStart} endDate={this.props.dateEnd} status={this.props.status} onChange={this.props.onInputChange} />
      </div>
    )
  }
};

export default PracticalExperience;