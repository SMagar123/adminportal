import React from 'react';

export const SearchUsers = ({onClose}) => {
  return (
    <div className='search__filter'>
        <div className="search__filter-detail">
            <label>FirstName</label>
            <input type="text" />
        </div>      
        <div className="search__filter-detail">
            <label>LastName</label>
            <input type="text" />
        </div>   
        <div className="search__filter-detail">
            <label>Email</label>
            <input type="email" />
        </div>   
        <div className="search__filter-detail">
            <label>Phone number</label>
            <input type="number" />
        </div>   
        <button onClick={onClose}>Filter</button>
    </div>
  )
};

 