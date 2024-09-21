import React from 'react'

function Dropdown({ items , show }) {
    return (
        <div className={`dropdown ${show ? "dropdown-active" : "dropdown-hidden" }`}>
            {
                items.length > 0 && items.map((item,index) => <div key={index} className='dropItems'>{item.title}</div>)
            }
        </div>
    )
}

export default Dropdown