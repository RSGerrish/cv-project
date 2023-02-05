import { useState } from 'react';
import TextControl from './TextControl';
import MonthControl from './MonthControl';
import YearControl from './YearControl';

const EE = () => {
  const [monthFromVal, setMonthFromVal] = useState('August');
  const [yearFromVal, setYearFromVal] = useState('2006');

  const handleMonthVal = (value) => {
    setMonthFromVal(value);
  }

  const handleYearVal = (value) => {
    setYearFromVal(value);
  }

  return ( 
    <div className="edu-experience">
      <div className="edu-title-container">
        <div className="edu-flex-wrapper">
          <div className="edu-title-container-col1">
            <TextControl text={'School Name'} classCustom="edu-school-name" opt="box" />
            <TextControl text={'Degree Earned'} classCustom="edu-degree" opt="box" />
            <TextControl text={'School Location'} classCustom="edu-location" opt="box" />
          </div>
          <div className="edu-title-container-col2">
            <MonthControl classCustom="exp-month" month={'August'} canRemove={true} handleMonthVal={handleMonthVal} />
            <YearControl classCustom="exp-year" year={'2006'} canRemove={true} handleYearVal={handleYearVal} />
            { monthFromVal || yearFromVal ? <span className="separator-to">to</span> : null}
            <MonthControl classCustom="exp-month" month={'June'} canRemove={false} />
            <YearControl classCustom="exp-year" year={'2012'} canRemove={false} />
          </div>
        </div>
      </div>      
    </div>
   );
}
 
export default EE;