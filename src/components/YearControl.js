
import { useState } from 'react';

const YearControl = (props) => {
    const [value, setValue] = useState(props.year);
    const [isEditable, setIsEditable] = useState(false);

    const yearList = [];
    const currentYear = new Date().getFullYear();

    // Populate the range of the year list and add to the yearList array
    for (let i=1960; i<=currentYear; i++) {
      yearList.unshift(i);
    }

    // Perform check to see if value="", if it does, then return an empty div
    if(value==="") {
      return (
        <div className="month-control-container"></div>
      )
    } else {                // If value is not an empty string, then continue to render the div depending 
      if(isEditable && props.canRemove) {      //or not it is in an editable state or not
        return ( 
          <div className="year-control-container">
            <select className={props.classCustom} autoFocus value={value} onBlur={() => setIsEditable(false)} onChange={(e) => {
              setValue(e.target.value);
              setIsEditable(false);
              props.handleYearVal(e.target.value);  // Fire the value of the year back to the parent so we can evaluate if we want to render 'to' or not
            }}>
              <option value={""}>none</option>    {/*Option of 'none' available in this condition (only diff)*/}
              {yearList.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>
        );
      } else if(isEditable && !props.canRemove) {
        return ( 
          <div className="year-control-container">
            <select className={props.classCustom} autoFocus value={value} onBlur={() => setIsEditable(false)} onChange={(e) => {
              setValue(e.target.value);
              setIsEditable(false);
              props.handleYearVal(e.target.value);
            }}>
              {yearList.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>
        );
      } else {    // Finally, if the control is not in an editable state, then render as a div with the
        return (  // selected value
          <div className="year-control-container">
            <div className={props.classCustom} onClick={(e) => setIsEditable(true)}>{value}</div>
          </div>
        );
      }
    }
  }
 
export default YearControl;