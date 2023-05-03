import React from 'react'

export const Button = ({name, type, handleClick,className, onClick}) => {
  return (
    <div className='buttonComponent'>
      <button type={type} handleClick={handleClick} onClick={onClick} className={className}>{name} </button>
    </div>
  )
};


