import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { menuItems } from '../menuItems';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";



function Navbar() {
  const [openIndex, setOpenIndex] = useState(null)
  const [showSlider, setShowSlider] = useState(false)




  return (
    <div className={`${showSlider ? "overlay-active" : ""}`}>
    <nav className='navbar' onMouseLeave={() => setOpenIndex(null)}>
      <div className='flex items-center gap-10'>
        <div className='expandBtn lg:hidden block' onClick={() => setShowSlider(true)}>
          <RxHamburgerMenu size={30} />
        </div>
        <div className='logo'>
          <img src='assets/logo.svg' />
        </div>
        <div className='menus lg:flex hidden'>
          {
            menuItems && menuItems.map((item, index) => {
              return <div key={index} className='menu-container'
                onMouseEnter={() => setOpenIndex(index)}
              >
                <div className='flex items-center'>
                  <div className='menuItem'>{item.title}</div>
                  {item.submenu?.length > 0 && (
                    openIndex === index ? <FaCaretUp /> : <FaCaretDown />
                  )}
                </div>
                {item.submenu?.length > 0 && <Dropdown items={item.submenu} show={openIndex === index} />}
              </div>
            })
          }

        </div>
      </div>

      <div className='flex gap-2'>
        <button>Signup</button>
        <button>login</button>
      </div>

      {/* for md sm hamburger menu */}
       <div className={`slider ${showSlider ? "slider-active" : "slider-hidden"}`}>
      <div className='flex items-center justify-between px-8 py-6'>
        <div className='text-2xl font-bold'>Menu</div>
        <div onClick={() => setShowSlider(false)}><RxCross2 size={25} /></div>
      </div>
    </div>
    </nav >
    </div>
  )
}

export default Navbar