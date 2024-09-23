import React, { useState } from 'react'
import Dropdown from './Dropdown';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { menuItems} from '../../data/navbar';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Button from '../miscellaneous/Button';


function Navbar() {
  const [openIndex, setOpenIndex] = useState(null)
  const [showSlider, setShowSlider] = useState(false)

  const handleMenuClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the dropdown
  };

  // getting primary color from CSS variablesss (react-icon color set)
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();


  return (
    <div className={`${showSlider ? "overlay-active" : ""}`}>
      <nav className='navbar lg:px-8 lg:py-2 md:px-8 md:py-2 px-4 py-2' onMouseLeave={() => setOpenIndex(null)}>
        <div className='flex items-center gap-10'>
          <div className='expandBtn lg:hidden block' onClick={() => setShowSlider(true)}>
            <RxHamburgerMenu size={30} color={primaryColor} />
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
                  <Link to={item.href} className='flex items-center'>
                    <div className='menuItem'>{item.title}</div>
                    {item.submenu?.length > 0 && (
                      openIndex === index ? <FaCaretUp /> : <FaCaretDown />
                    )}
                  </Link>
                  {item.submenu?.length > 0 && <Dropdown items={item.submenu} show={openIndex === index} />}
                </div>
              })
            }

          </div>
        </div>

        <div className='flex gap-2 items-center'>
          <Button variant='outlined' style={{ fontWeight: "500" }}>Log in</Button>
          <Button bgColor="primary" variant="filled" style={{ fontWeight: "500", color: "#fff" }}>Signup</Button>
        </div>

        {/* for md sm hamburger menu */}
        <div className={`slider ${showSlider ? "slider-active" : "slider-hidden"}`}>
          <div className='flex items-center justify-between px-8 py-6'>
            <div className='text-2xl font-bold'>Menu</div>
            <div onClick={() => setShowSlider(false)}><RxCross2 size={25} /></div>
          </div>
          <div className='menus'>
            {menuItems && menuItems.map((item, index) => (
              <div key={index} className='menu-container'>
                <Link to={item.href} className='flex items-center px-8' onClick={() => handleMenuClick(index)}>
                  <div className='menuItem'>{item.title}</div>
                  {item.submenu?.length > 0 && (
                    openIndex === index ? <FaCaretUp /> : <FaCaretDown />
                  )}
                </Link>
                <div className='relative'>
                  {item.submenu?.length > 0 && (
                    <Dropdown items={item.submenu} show={openIndex === index} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav >
    </div>
  )
}

export default Navbar