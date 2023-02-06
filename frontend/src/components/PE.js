import { useState } from 'react';
import MonthControl from './MonthControl';
import TextControl from './TextControl';
import YearControl from './YearControl';

const PE = () => {
  const [monthFromVal, setMonthFromVal] = useState('August');
  const [yearFromVal, setYearFromVal] = useState('2006');

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
            <TextControl text={'Job Title'} classCustom={"exp-title"} opt="box" />
            <TextControl text={'Company Name'} classCustom={"exp-company"} opt="box" />
            <TextControl text={'Location'} classCustom={"exp-location"} opt="box" />
          </div>
          <div className="exp-title-container-col2">
            <MonthControl classCustom="exp-month" month={'July'} canRemove={true} handleMonthVal={handleMonthVal} />
            <YearControl classCustom="exp-year" year={'2022'} canRemove={true} handleYearVal={handleYearVal} />
            { monthFromVal || yearFromVal ? <span className="separator-to">to</span> : null}
            <MonthControl classCustom="exp-month" month={'January'} canRemove={false} />
            <YearControl classCustom="exp-year" year={'2023'} canRemove={false} />
          </div>
        </div>
        <TextControl text={'Include highlights of you accomplishments and responsibilities here'} classCustom={"exp-highlight"} opt="area" />
      </div>
    </div>
   );
}
 
export default PE;