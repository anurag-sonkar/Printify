import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ items , show }) {
    return (
        <div className={`dropdown lg:absolute relative lg:top-[4rem] top-0 lg:mx-0 mx-8 ${show ? "dropdown-active" : "dropdown-hidden" }`}>
            {
                items.length > 0 && items.map((item,index) => <Link to={item.href} key={index} className='dropItems'>{item.title}</Link>)
            }
        </div>
    )
}

export default Dropdown