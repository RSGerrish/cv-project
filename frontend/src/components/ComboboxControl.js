import { useCVsContext } from "../hooks/useCVsContext";

const ComboboxControl = ({ handleIndexState, i }) => {
  const {cvs} = useCVsContext()
  
  return ( 
    <select key='test' className={"combobox"} onChange={(e) => {
      handleIndexState(e.target.selectedIndex)
    }}>
      {cvs.map((cvInstance) => (<option key={cvInstance._id}>{cvInstance.title}</option>))}
    </select>
   );
}
 
export default ComboboxControl;