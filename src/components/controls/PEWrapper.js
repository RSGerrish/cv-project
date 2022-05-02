import React from 'react';

const PEWrapper = ({ companyName, positionTitle, mainTasks, startDate, endDate, status, onChange }) => {
  if(status) {
    return (
      <div className="PEWrapper">
        <input type="text" className="pe-text" id="pe-cname" onChange={onChange} defaultValue={companyName}></input>
        <input type="text" className="pe-text" id="pe-ptitle" onChange={onChange} defaultValue={positionTitle}></input>
        <input type="text" className="pe-text" id="pe-mtasks" onChange={onChange} defaultValue={mainTasks}></input>
        <input type="text" className="pe-text" id="pe-datestart" onChange={onChange} defaultValue={startDate}></input>
        <input type="text" className="pe-text" id="pe-dateend" onChange={onChange} defaultValue={endDate}></input>
      </div>
    )
  } else {
    return (
      <div className="PEWrapper">
        <div id="pe-cname">{companyName}</div>
        <div id="pe-ptitle">{positionTitle}</div>
        <div id="pe-mtasks">{mainTasks}</div>
        <div id="pe-datestart">{startDate}</div>
        <div id="pe-dateend">{endDate}</div>
      </div>
    )
  }
}

export default PEWrapper;