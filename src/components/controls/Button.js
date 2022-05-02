import React from "react";

const Button = ({ text, id, onClick }) => {
  return (
    <button id={id} onClick={onClick}>{text}</button>
  );
};

export default Button;