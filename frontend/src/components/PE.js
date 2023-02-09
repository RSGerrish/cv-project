import { useState } from 'react';
import { useCVsContext } from '../hooks/useCVsContext';

import MonthControl from './MonthControl';
import TextControl from './TextControl';
import YearControl from './YearControl';

const PE = ({ statePHandler, i }) => {
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
            <YearControl classCustom="exp-year" year={'2022'} canRemove={true} handleYearVal={handleYearVal} stateName={"expFromYear"} stateHandler={stateCHandler} />
            { monthFromVal || yearFromVal ? <span className="separator-to">to</span> : null}
            <MonthControl classCustom="exp-month" month={'January'} canRemove={false} stateName={"expToMonth"} stateHandler={stateCHandler} />
            <YearControl classCustom="exp-year" year={'2023'} canRemove={false} stateName={"expToYear"} stateHandler={stateCHandler} />
          </div>
        </div>
        <TextControl text={'Include highlights of you accomplishments and responsibilities here'} classCustom={"exp-highlight"} opt="area" stateName={"expHighlights"} stateHandler={stateCHandler} />
      </div>
    </div>
   );
}
 
export default PE;