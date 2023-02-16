import { useIndexContext } from "../hooks/useIndexContext";

const CVList = ({ cvs }) => {
  const { index, indexDispatch } = useIndexContext()

  return ( 
    <select value={index} className="cv-list" name="cvlist" id="cv-select" onChange={(e) => {
      indexDispatch({type: 'SET_INDEX', payload: e.target.selectedIndex})
    }}>
      {cvs.map((cv, i) => {
        return <option value={i} key={i}>{cv.title}</option>
      })}
    </select>
   );
}
 
export default CVList;