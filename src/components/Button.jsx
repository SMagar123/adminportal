import React from 'react'

export const Button = ({name, type, handleClick,reqValue, onClick}) => {
  return (
    <div>
      <button type={type} name={name} handleClick={handleClick} onClick={onClick}> </button>
    </div>
  )
};


