import React from 'react'

export const Input = ({type,onChange,placeholder,name}) => {
  return (
    <div className='inputComponent'>
      <input type={type} onChange={onChange} placeholder={placeholder} name={name}></input>
    </div>
  )
}

 