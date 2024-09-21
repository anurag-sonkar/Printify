import React from 'react'

function Dropdown({ items , show }) {
    return (
        <div className={`dropdown lg:absolute relative lg:top-[4rem] top-0 lg:mx-0 mx-8 ${show ? "dropdown-active" : "dropdown-hidden" }`}>
            {
                items.length > 0 && items.map((item,index) => <div key={index} className='dropItems'>{item.title}</div>)
            }
        </div>
    )
}

export default Dropdown