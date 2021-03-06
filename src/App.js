import React, { Component } from "react";
import './styles/App.css';
import GeneralInfo from "./components/GeneralInfo";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editGState: false,
      editEState: false,
      editPState: false,

      name: 'Robin',
      email: 'anything@whereever.com',
      phone: '555-5555',
      gBtnTxt: 'Edit',

      schoolName: 'Reading Area CC',
      major: 'Business Mgmt',
      gradDate: '06/2012',
      eBtnTxt: 'Edit',

      companyName: 'Composite Resources',
      positionTitle: 'Project Engineer',
      mainTasks: 'Task 1, Task 2, Task 3',
      dateStart: '01/2021',
      dateEnd: '03/2022',
      pBtnTxt: 'Edit',
    }
  }

  onHandleGIChange = () => {
    const nameVal = document.querySelector('#gi-name').value;
    const emailVal = document.querySelector('#gi-email').value;
    const phoneVal = document.querySelector('#gi-phone').value;

    this.setState({
      name: nameVal,
      email: emailVal,
      phone: phoneVal,
    });

    return;
  }

  onHandleEEChange = () => {
    const snVal = document.querySelector('#ee-sname').value;
    const majorVal = document.querySelector('#ee-major').value;
    const gdVal = document.querySelector('#ee-graddate').value;

    this.setState({
      schoolName: snVal,
      major: majorVal,
      gradDate: gdVal,
    });

    return;
  }

  onHandlePEChange = () => {
    const coVal = document.querySelector('#pe-cname').value;
    const ptVal = document.querySelector('#pe-ptitle').value;
    const mtVal = document.querySelector('#pe-mtasks').value;
    const dsVal = document.querySelector('#pe-datestart').value;
    const deVal = document.querySelector('#pe-dateend').value;

    this.setState({
      companyName: coVal,
      positionTitle: ptVal,
      mainTasks: mtVal,
      dateStart: dsVal,
      dateEnd: deVal,
    })
  }

  onEditClicked = (e) => {
    const btn = e.target;

    if(btn.id === "gi-btn") {
      if(btn.innerHTML === "Edit") {
        this.setState({
          editGState: true,
          gBtnTxt: 'Submit',
        })
      } else {
        this.setState({
          editGState: false,
          gBtnTxt: 'Edit',
        })
      }
    } else if(btn.id === "ee-btn") {
      if(btn.innerHTML === "Edit") {
        this.setState({
          editEState: true,
          eBtnTxt: 'Submit',
        })
      } else {
        this.setState({
          editEState: false,
          eBtnTxt: 'Edit',
        })
      }
    } else if(btn.id === "pe-btn") {
      if(btn.innerHTML === "Edit") {
        this.setState({
          editPState: true,
          pBtnTxt: 'Submit',
        })
      } else {
        this.setState({
          editPState: false,
          pBtnTxt: 'Edit',
        })
      }
    }
  }

  onAddEEClicked = () => {
    
  }

  render() {
    return (
      <div className="App">
        <GeneralInfo name={this.state.name} email={this.state.email} phone={this.state.phone} onBtnClicked={this.onEditClicked} onAddBtnClicked={this.onAddEEClicked} onInputChange={this.onHandleGIChange} btnTxt={this.state.gBtnTxt} status={this.state.editGState} />
        <EducationExperience schoolName={this.state.schoolName} major={this.state.major} gradDate={this.state.gradDate} onBtnClicked={this.onEditClicked} onInputChange={this.onHandleEEChange} btnTxt={this.state.eBtnTxt} status={this.state.editEState} />
        <PracticalExperience companyName={this.state.companyName} positionTitle={this.state.positionTitle} mainTasks={this.state.mainTasks} dateStart={this.state.dateStart} dateEnd={this.state.dateEnd} onBtnClicked={this.onEditClicked} onInputChange={this.onHandlePEChange} btnTxt={this.state.pBtnTxt} status={this.state.editPState} />
      </div>
    );
  }
}

export default App;
