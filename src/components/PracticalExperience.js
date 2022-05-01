import React, { Component } from "react";
import '../styles/PracticalExperience.css';

class PracticalExperience extends Component {
  setInput = (ele) => {
    return {__html: ele};
  }

  render() {

    return(
      <div className="PracticalExperience">
        <button id="pe-btn" onClick={this.props.onBtnClicked}>Edit</button>
        <div id="pe-cname" dangerouslySetInnerHTML={this.setInput(this.props.companyName)}></div>
        <div id="pe-ptitle" dangerouslySetInnerHTML={this.setInput(this.props.positionTitle)}></div>
        <div id="pe-mtasks" dangerouslySetInnerHTML={this.setInput(this.props.mainTasks)}></div>
        <div id="pe-datestart" dangerouslySetInnerHTML={this.setInput(this.props.dateStart)}></div>
        <div id="pe-dateend" dangerouslySetInnerHTML={this.setInput(this.props.dateEnd)}></div>
      </div>
    )
  }
};

export default PracticalExperience;