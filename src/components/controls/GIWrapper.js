import React from 'react';

const GIWrapper = ({ name, email, phone, status, onChange }) => {
  if(status) {
    return(
      <div className="GIWrapper">
        <input className="gi-text" onChange={onChange} type="text" id="gi-name" defaultValue={name}></input>
        <input className="gi-text" type="text" id="gi-email" defaultValue={email}></input>
        <input className="gi-text" type="text" id="gi-phone" defaultValue={phone}></input>
    </div>
    );
  } else {
    return(
      <div className="GIWrapper">
        <div id="gi-name">{name}</div>
        <div id="gi-email">{email}</div>
        <div id="gi-phone">{phone}</div>
      </div>
    );
  };
};

export default GIWrapper;