import { useState } from "react";

//TextControl will return a div that displays the 'text' prop as the div contents
//If the div is clicked, the div becomes an editable text (prop.opt="box") input (or textarea prop.opt="area")
//the value is updated each time the content is changed within the input
//When finished editing and focus is lost from the input or enter is pressed, the input  
  //becomes a div and the content equals the new text value

const TextControl = (props) => {
  //props(text, isEdit, classCustom, opt)
  //text = default text value
  //isEdit = boolean to determine if control is editable or not
  //classCustom = set a custom html/css class for this instance of the control
  //opt = can be either "box" or "area". Box returns a single line textbox and 
    //area returns a textarea when the control is editable
  
  const [value, setValue] = useState(props.text);
  const [isEditable, setIsEditable] = useState(false);
  const option = (props.opt) ? props.opt : "box";

  const handleToggleEditOn = () => {
    setIsEditable(true);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditable(false);
    }
  }

  if (!isEditable) {
    return (
      <div className="textcontrol-container">
        <div className={props.classCustom} onClick={handleToggleEditOn}>{value}</div>
      </div>
    )
  } else if (isEditable && option==="box") {
    return (
      <div className="textcontrol-container">
        <input autoFocus onFocus={(e) => e.currentTarget.select()} onBlur={() => setIsEditable(false)} type={props.classCustom} value={value} className={props.classCustom} onKeyDown={handleKeyPress} onChange={(e) => setValue(e.target.value)}></input>
      </div>
    )    
  } else if (isEditable && props.opt==="area") {
    return(
      <div className="textcontrol-container">
        <textarea autoFocus onFocus={(e) => e.currentTarget.select()} onBlur={() => setIsEditable(false)} value={value} className={props.classCustom} onKeyDown={handleKeyPress} onChange={(e) => setValue(e.target.value)}></textarea>
      </div>    
    )
  }
}
 
export default TextControl;