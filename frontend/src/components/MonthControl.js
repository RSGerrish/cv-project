import { useState } from 'react';

const MonthControl = (props) => {
  const { stateHandler } = props
  const [value, setValue] = useState(props.month);
  const [isEditable, setIsEditable] = useState(false);

  //Check to see if we should render this instance of the moth component or not
    //If "none" is chosen in the combobox, then value="" and we return an empty div
  if(value==="") {
    return (
      <div className="month-control-container"></div>
    )
  } else {
    if(isEditable && props.canRemove) {
      return ( 
        <div className="month-control-container">
          <select className={props.classCustom} autoFocus value={value} onBlur={() => setIsEditable(false)} onChange={(e) => {
            setValue(e.target.value);
            setIsEditable(false);
            props.handleMonthVal(e.target.value);
          }}>
            <option value={""}>none</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      );
    } else if (isEditable && !props.canRemove) {
      return ( 
        <div className="month-control-container">
          <select className={props.classCustom} autoFocus value={value} onBlur={() => setIsEditable(false)} onChange={(e) => {
            setValue(e.target.value);
            setIsEditable(false);
            props.handleMonthVal(e.target.value);
            stateHandler(props.stateName, e.target.value)
          }}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      );
    } 
    else {
      return ( 
        <div className="month-control-container">
          <div className={props.classCustom} onClick={(e) => setIsEditable(true)}>{value}</div>
        </div>
      );
    }
  }
}
 
export default MonthControl;