import { useState } from 'react';
import TextControl from './TextControl';
import MonthControl from './MonthControl';
import YearControl from './YearControl';
import { useCVsContext } from '../hooks/useCVsContext';

const EE = ({ statePHandler, instance }) => {
  const [monthFromVal, setMonthFromVal] = useState('');
  const [yearFromVal, setYearFromVal] = useState('');
  const {cvs} = useCVsContext()

  const handleMonthVal = (value) => {
    setMonthFromVal(value);
  }

  const handleYearVal = (value) => {
    setYearFromVal(value);
  }

  const stateCHandler = ((stateName, value) => {
    switch(stateName) {
      case 'jobTitle':
        statePHandler('jobTitle', value)
        break;

      case 'jobTitle2':
        statePHandler('jobTitle2', value)
        break;
      
      case 'companyName':
        statePHandler('companyName', value)
        break;

      case 'companyName2':
        statePHandler('companyName2', value)
        break;
      
      case 'companyLocation':
        statePHandler('companyLocation', value)
        break;

      case 'companyLocation2':
        statePHandler('companyLocation2', value)
        break;

      case 'expFromMonth':
        statePHandler('expFromMonth', value)
        break;

      case 'expFromMonth2':
        statePHandler('expFromMonth2', value)
        break;

      case 'expFromYear':
        statePHandler('expFromYear', value)
        break;

      case 'expFromYear2':
        statePHandler('expFromYear2', value)
        break;

      case 'expToMonth':
        statePHandler('expToMonth', value)
        break;

      case 'expToMonth2':
        statePHandler('expToMonth2', value)
        break;

      case 'expToYear':
        statePHandler('expToYear', value)
        break;

      case 'expToYear2':
        statePHandler('expToYear2', value)
        break;

      case 'expHighlights':
        statePHandler('expHighlights', value)
        break;

      case 'expHighlights2':
        statePHandler('expHighlights2', value)
        break;
      
      default:
        break;
    }
  })

  if (instance==="school1") {
    return ( 
      <div className="edu-experience">
        <div className="edu-title-container">
          <div className="edu-flex-wrapper">
            <div className="edu-title-container-col1">
              {cvs && <TextControl text={cvs[0].schoolName} stateName="schoolName" stateHandler={stateCHandler} classCustom="edu-school-name" opt="box" />}
              <TextControl text={cvs[0].degree} stateName="degree" stateHandler={stateCHandler} classCustom="edu-degree" opt="box" />
              <TextControl text={cvs[0].schoolLocation} stateName="schoolLocation" stateHandler={stateCHandler} classCustom="edu-location" opt="box" />
            </div>
            <div className="edu-title-container-col2">
              <MonthControl classCustom="exp-month" stateName="schFromMonth" stateHandler={stateCHandler} month={cvs[0].schFromMonth} canRemove={true} handleMonthVal={handleMonthVal} />
              <YearControl classCustom="exp-year" stateName="schFromYear" stateHandler={stateCHandler} year={cvs[0].schFromYear} canRemove={true} handleYearVal={handleYearVal} />
              { monthFromVal!=="" || yearFromVal!=="" ? <span className="separator-to">to</span> : null}
              <MonthControl classCustom="exp-month" stateName="schToMonth" stateHandler={stateCHandler} month={cvs[0].schToMonth} canRemove={false} />
              <YearControl classCustom="exp-year" stateName="schToYear" stateHandler={stateCHandler} year={cvs[0].schToYear} canRemove={false} />
            </div>
          </div>
        </div>      
      </div>
     );
  }

  if (instance==="school2") {
    return ( 
      <div className="edu-experience">
        <div className="edu-title-container">
          <div className="edu-flex-wrapper">
            <div className="edu-title-container-col1">
              {cvs && <TextControl text={cvs[0].schoolName2} stateName="schoolName2" stateHandler={stateCHandler} classCustom="edu-school-name" opt="box" />}
              <TextControl text={cvs[0].degree2} stateName="degree2" stateHandler={stateCHandler} classCustom="edu-degree" opt="box" />
              <TextControl text={cvs[0].schoolLocation2} stateName="schoolLocation2" stateHandler={stateCHandler} classCustom="edu-location" opt="box" />
            </div>
            <div className="edu-title-container-col2">
              <MonthControl classCustom="exp-month" stateName="schFromMonth2" stateHandler={stateCHandler} month={cvs[0].schFromMonth2} canRemove={true} handleMonthVal={handleMonthVal} />
              <YearControl classCustom="exp-year" stateName="schFromYear2" stateHandler={stateCHandler} year={cvs[0].schFromYear2} canRemove={true} handleYearVal={handleYearVal} />
              { monthFromVal!=="" || yearFromVal!=="" ? <span className="separator-to">to</span> : null}
              <MonthControl classCustom="exp-month" stateName="schToMonth2" stateHandler={stateCHandler} month={cvs[0].schToMonth2} canRemove={false} />
              <YearControl classCustom="exp-year" stateName="schToYear2" stateHandler={stateCHandler} year={cvs[0].schToYear2} canRemove={false} />
            </div>
          </div>
        </div>      
      </div>
    );
  }
}
 
export default EE;