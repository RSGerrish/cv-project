import { useState } from "react";
import { useCVsContext } from "../hooks/useCVsContext";

const ComboboxControl = ({ handleComboChange, index }) => {
  const {cvs} = useCVsContext()
  
  return ( 
    <select key={index} className={"combobox"} value={cvs[index].title} onChange={(e) => {
      handleComboChange(e.target.selectedIndex)
    }}>
      {cvs.map((cvInstance) => (<option key={cvInstance._id}>{cvInstance.title}</option>))}
    </select>
   );
}
 
export default ComboboxControl;