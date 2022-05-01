import React, { Component } from "react";
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
  setInput = (ele) => {
    return {__html: ele};
  }

  /*
  Should not be using dangerouslySetInnerHTML. I will stop when I understand
  fully how to dynamically add and remove html elements within modules.
  Perhaps I need to make a different component totally with the new 'state'
  of it having the inputs and the other just displaying the info. Or perhaps
  take it a step further and make each of the 3 items below a separate component
  which could be one of two components: 1 that displays the info and 1
  that displays the input box
  */

  render() {    
    return(
      <div className="GeneralInfo">
        <button id="gi-btn" onClick={this.props.onBtnClicked}>Edit</button>
        <div id="gi-name" dangerouslySetInnerHTML={this.setInput(this.props.name)}></div>
        <div id="gi-email" dangerouslySetInnerHTML={this.setInput(this.props.email)}></div>
        <div id="gi-phone" dangerouslySetInnerHTML={this.setInput(this.props.phone)}></div>
      </div>
    )
  }
};

export default GeneralInfo;