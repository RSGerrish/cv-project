import React, { Component } from "react";
import GIWrapper from './controls/GIWrapper.js';
import Button from './controls/Button.js';
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
  

  render() {
    return(
      <div className="GeneralInfo">
        <Button text={this.props.btnTxt} id="gi-btn" onClick={this.props.onBtnClicked} />
        <GIWrapper name={this.props.name} email={this.props.email} phone={this.props.phone} status={this.props.status} onChange={this.props.onInputChange} />
      </div>
    )
  }
};

export default GeneralInfo;