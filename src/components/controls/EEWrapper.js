import React from 'react';

const EEWrapper = ({ schoolName, major, gradDate, status, onChange }) => {
  if(status){
    return(
      <div className="EEWrapper">
        <input type="text" className="ee-text" id="ee-sname" onChange={onChange} defaultValue={schoolName} />
        <input type="text" className="ee-text" id="ee-major" onChange={onChange} defaultValue={major} />
        <input type="text" className="ee-text" id="ee-graddate" onChange={onChange} defaultValue={gradDate} />
      </div>
    )
  } else {
    return(
      <div className="EEWrapper">
        <div id="ee-sname">{schoolName}</div>
        <div id="ee-major">{major}</div>
        <div id="ee-graddate">{gradDate}</div>
      </div>
    )
  }
}

export default EEWrapper;