import React, { Component } from "react";
import './styles/App.css';
import GeneralInfo from "./components/GeneralInfo";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Robin',
      email: 'anything@whereever.com',
      phone: '555-5555',

      schoolName: 'Reading Area CC',
      major: 'Business Mgmt',
      gradDate: '06/2012',

      companyName: 'Composite Resources',
      positionTitle: 'Project Engineer',
      mainTasks: 'Task 1, Task 2, Task 3',
      dateStart: '01/2021',
      dateEnd: '03/2022',
    }
  }


  onEditClicked = (e) => {
    const btn = e.target;
    const nameEle = document.querySelector('#gi-name');
    const emailEle = document.querySelector('#gi-email');
    const phoneEle = document.querySelector('#gi-phone');
    const snEle = document.querySelector('#ee-sname');
    const majorEle = document.querySelector('#ee-major');
    const gdEle = document.querySelector('#ee-graddate');
    const coEle = document.querySelector('#pe-cname');
    const posTitle = document.querySelector('#pe-ptitle');
    const mTasks = document.querySelector('#pe-mtasks');
    const dStart = document.querySelector('#pe-datestart');
    const dEnd = document.querySelector('#pe-dateend');

    if(btn.innerHTML === "Edit") {
      btn.innerHTML = "Submit";

      if(btn.id === "gi-btn") {        
        this.setState({
          name: `<input type="text" value=${nameEle.innerHTML}></input>`,
          email: `<input type="text" value=${emailEle.innerHTML}></input>`,
          phone: `<input type="text" value=${phoneEle.innerHTML}></input>`,
        });
      } else if(btn.id === "ee-btn") {
        this.setState({
          schoolName: `<input type="text" value=${snEle.innerHTML}></input>`,
          major: `<input type="text" value=${majorEle.innerHTML}></input>`,
          gradDate: `<input type="text" value=${gdEle.innerHTML}></input>`,
        });
      } else if(btn.id === 'pe-btn') {
        this.setState({
          companyName: `<input type="text" value=${coEle.innerHTML}></input>`,
          positionTitle: `<input type="text" value=${posTitle.innerHTML}></input>`,
          mainTasks: `<input type="text" value=${mTasks.innerHTML}></input>`,
          dateStart: `<input type="text" value=${dStart.innerHTML}></input>`,
          dateEnd: `<input type="text" value=${dEnd.innerHTML}></input>`,
        })
      }
    } else if(btn.innerHTML === "Submit") {
      btn.innerHTML = "Edit";

      if(btn.id === "gi-btn") {
        const nameVal = nameEle.firstChild.value;
        const emailVal = emailEle.firstChild.value;
        const phoneVal = phoneEle.firstChild.value
         
        this.setState({
          name: nameVal,
          email: emailVal,
          phone: phoneVal,
        });
      } else if(btn.id === "ee-btn") {
        const snVal = snEle.firstChild.value;
        const majorVal = majorEle.firstChild.value;
        const gdVal = gdEle.firstChild.value;

        this.setState({
          schoolName: snVal,
          major: majorVal,
          gradDate: gdVal,
        });
      } else if(btn.id === "pe-btn") {
        const coVal = coEle.firstChild.value;
        const posVal = posTitle.firstChild.value;
        const mtVal = mTasks.firstChild.value;
        const dsVal = dStart.firstChild.value;
        const deVal = dEnd.firstChild.value;

        this.setState({
          companyName: coVal,
          positionTitle: posVal,
          mainTasks: mtVal,
          dateStart: dsVal,
          dateEnd: deVal,
        });
      }
    } else {
      console.log('Error: Form submition unclear');
    }
  }

  render() {
    return (
      <div className="App">
        <GeneralInfo name={this.state.name} email={this.state.email} phone={this.state.phone} onBtnClicked={this.onEditClicked}/>
        <EducationExperience schoolName={this.state.schoolName} major={this.state.major} gradDate={this.state.gradDate} onBtnClicked={this.onEditClicked}/>
        <PracticalExperience companyName={this.state.companyName} positionTitle={this.state.positionTitle} mainTasks={this.state.mainTasks} dateStart={this.state.dateStart} dateEnd={this.state.dateEnd} onBtnClicked={this.onEditClicked}/>
      </div>
    );
  }
}

export default App;
