import React from 'react';

const Button = ({ value, handleClick, disabled }) => {
  const buttonStyle = {
    border: '2px solid black',
    backgroundColor: 'white',
    color: 'black',
    marginRight: '5px',
    fontSize: '14px',
    padding: '8px 30px',
    cursor: disabled ? 'default': 'pointer',
    opacity: disabled ? 0.5 : 1
  };

  return (
    <button style={buttonStyle} value={value} onClick={handleClick}>{value}</button>
  );
};

export default Button;
