const EmptyExp = ({ handleAddExp }) => {
  return ( 
    <div className="empty-exp" onClick={handleAddExp} >
      Add Another Past Experience
    </div>
   );
}
 
export default EmptyExp;