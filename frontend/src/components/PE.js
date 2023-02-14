import { useState } from 'react';
import { useCVsContext } from '../hooks/useCVsContext';

import MonthControl from './MonthControl';
import TextControl from './TextControl';
import YearControl from './YearControl';

const PE = ({ statePHandler, i, instance }) => {
  const {cvs} = useCVsContext()
  const [monthFromVal, setMonthFromVal] = useState('August');
  const [yearFromVal, setYearFromVal] = useState('2006');

  const stateCHandler = ((stateName, value) => {
    switch(stateName) {
      case 'jobTitle':
        statePHandler('jobTitle', value)
        break;
      
      case 'companyName':
        statePHandler('companyName', value)
        break;
      
      case 'companyLocation':
        statePHandler('companyLocation', value)
        break;

      case 'expFromMonth':
        statePHandler('expFromMonth', value)
        break;

      case 'expFromYear':
        statePHandler('expFromYear', value)
        break;

      case 'expToMonth':
        statePHandler('expToMonth', value)
        break;

      case 'expToYear':
        statePHandler('expToYear', value)
        break;

      case 'expHighlights':
        statePHandler('expHighlights', value)
        break;
      
      default:
        break;
    }
  })

  const handleMonthVal = (value) => {
    setMonthFromVal(value);
  }

  const handleYearVal = (value) => {
    setYearFromVal(value);
  }

  if (instance==="exp1") {
    return ( 
      <div className="prof-experience">
        <div className="exp-title-container">
          <div className="exp-flex-wrapper">
            <div className="exp-title-container-col1">
              <TextControl text={cvs[i].jobTitle} classCustom={"exp-title"} opt="box" stateName={"jobTitle"} stateHandler={stateCHandler} />
              <TextControl text={cvs[i].companyName} classCustom={"exp-company"} opt="box" stateName={"companyName"} stateHandler={stateCHandler} />
              <TextControl text={cvs[i].companyLocation} classCustom={"exp-location"} opt="box" stateName={"companyLocation"} stateHandler={stateCHandler} />
            </div>
            <div className="exp-title-container-col2">
              <MonthControl classCustom="exp-month" month={cvs[i].expFromMonth} canRemove={true} handleMonthVal={handleMonthVal} stateName={"expFromMonth"} stateHandler={stateCHandler} />
              <YearControl classCustom="exp-year" year={cvs[i].expFromYear} canRemove={true} handleYearVal={handleYearVal} stateName={"expFromYear"} stateHandler={stateCHandler} />
              { monthFromVal!=="" || yearFromVal!=="" ? <span className="separator-to">to</span> : null }
              <MonthControl classCustom="exp-month" month={cvs[i].expToMonth} canRemove={false} stateName={"expToMonth"} stateHandler={stateCHandler} />
              <YearControl classCustom="exp-year" year={cvs[i].expToYear} canRemove={false} stateName={"expToYear"} stateHandler={stateCHandler} />
            </div>
          </div>
          <TextControl text={cvs[i].expHighlights} classCustom={"exp-highlight"} opt="area" stateName={"expHighlights"} stateHandler={stateCHandler} />
        </div>
      </div>
    );
  }

  if (instance==="exp2") {
    return ( 
      <div className="prof-experience">
        <div className="exp-title-container">
          <div className="exp-flex-wrapper">
            <div className="exp-title-container-col1">
              <TextControl text={cvs[i].jobTitle2} classCustom={"exp-title"} opt="box" stateName={"jobTitle2"} stateHandler={stateCHandler} />
              <TextControl text={cvs[i].companyName2} classCustom={"exp-company"} opt="box" stateName={"companyName2"} stateHandler={stateCHandler} />
              <TextControl text={cvs[i].companyLocation2} classCustom={"exp-location"} opt="box" stateName={"companyLocation2"} stateHandler={stateCHandler} />
            </div>
            <div className="exp-title-container-col2">
              <MonthControl classCustom="exp-month" month={cvs[i].expFromMonth2} canRemove={true} handleMonthVal={handleMonthVal} stateName={"expFromMonth2"} stateHandler={stateCHandler} />
              <YearControl classCustom="exp-year" year={cvs[i].expFromYear2} canRemove={true} handleYearVal={handleYearVal} stateName={"expFromYear2"} stateHandler={stateCHandler} />
              { monthFromVal!=="" || yearFromVal!=="" ? <span className="separator-to">to</span> : null }
              <MonthControl classCustom="exp-month" month={cvs[i].expToMonth2} canRemove={false} stateName={"expToMonth2"} stateHandler={stateCHandler} />
              <YearControl classCustom="exp-year" year={cvs[i].expToYear2} canRemove={false} stateName={"expToYear2"} stateHandler={stateCHandler} />
            </div>
          </div>
          <TextControl text={cvs[i].expHighlights2} classCustom={"exp-highlight"} opt="area" stateName={"expHighlights2"} stateHandler={stateCHandler} />
        </div>
      </div>
    ); 
  }

  if (instance==="exp3") {
    return ( 
      <div className="prof-experience">
        <div className="exp-title-container">
          <div className="exp-flex-wrapper">
            <div className="exp-title-container-col1">
              <TextControl text={cvs[i].jobTitle3} classCustom={"exp-title"} opt="box" stateName={"jobTitle3"} stateHandler={stateCHandler} />
              <TextControl text={cvs[i].companyName3} classCustom={"exp-company"} opt="box" stateName={"companyName3"} stateHandler={stateCHandler} />
              <TextControl text={cvs[i].companyLocation3} classCustom={"exp-location"} opt="box" stateName={"companyLocation3"} stateHandler={stateCHandler} />
            </div>
            <div className="exp-title-container-col2">
              <MonthControl classCustom="exp-month" month={cvs[i].expFromMonth3} canRemove={true} handleMonthVal={handleMonthVal} stateName={"expFromMonth3"} stateHandler={stateCHandler} />
              <YearControl classCustom="exp-year" year={cvs[i].expFromYear3} canRemove={true} handleYearVal={handleYearVal} stateName={"expFromYear3"} stateHandler={stateCHandler} />
              { monthFromVal!=="" || yearFromVal!=="" ? <span className="separator-to">to</span> : null }
              <MonthControl classCustom="exp-month" month={cvs[i].expToMonth3} canRemove={false} stateName={"expToMonth3"} stateHandler={stateCHandler} />
              <YearControl classCustom="exp-year" year={cvs[i].expToYear3} canRemove={false} stateName={"expToYear3"} stateHandler={stateCHandler} />
            </div>
          </div>
          <TextControl text={cvs[i].expHighlights3} classCustom={"exp-highlight"} opt="area" stateName={"expHighlights3"} stateHandler={stateCHandler} />
        </div>
      </div>
    ); 
  }

  if (instance==="exp4") {
    return ( 
      <div className="prof-experience">
        <div className="exp-title-container">
          <div className="exp-flex-wrapper">
            <div className="exp-title-container-col1">
              <TextControl text={cvs[i].jobTitle4} classCustom={"exp-title"} opt="box" stateName={"jobTitle4"} stateHandler={stateCHandler} />
              <TextControl text={cvs[i].companyName4} classCustom={"exp-company"} opt="box" stateName={"companyName4"} stateHandler={stateCHandler} />
              <TextControl text={cvs[i].companyLocation4} classCustom={"exp-location"} opt="box" stateName={"companyLocation4"} stateHandler={stateCHandler} />
            </div>
            <div className="exp-title-container-col2">
              <MonthControl classCustom="exp-month" month={cvs[i].expFromMonth4} canRemove={true} handleMonthVal={handleMonthVal} stateName={"expFromMonth4"} stateHandler={stateCHandler} />
              <YearControl classCustom="exp-year" year={cvs[i].expFromYear4} canRemove={true} handleYearVal={handleYearVal} stateName={"expFromYear4"} stateHandler={stateCHandler} />
              { monthFromVal!=="" || yearFromVal!=="" ? <span className="separator-to">to</span> : null }
              <MonthControl classCustom="exp-month" month={cvs[i].expToMonth4} canRemove={false} stateName={"expToMonth4"} stateHandler={stateCHandler} />
              <YearControl classCustom="exp-year" year={cvs[i].expToYear4} canRemove={false} stateName={"expToYear4"} stateHandler={stateCHandler} />
            </div>
          </div>
          <TextControl text={cvs[i].expHighlights4} classCustom={"exp-highlight"} opt="area" stateName={"expHighlights4"} stateHandler={stateCHandler} />
        </div>
      </div>
    ); 
  }
}
 
export default PE;