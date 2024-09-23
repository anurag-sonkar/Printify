import React from 'react'
import logo from "/assets/logo.svg"
import { Link } from 'react-router-dom'
import { footerExtraLinks, footerLinks, socialMediaContactsLogo } from "../data/footer"

function Footer() {
  const footerHeadings = footerLinks.map((item) => Object.keys(item)[0])
  return (
    <div className='flex flex-col gap-30'>
      <div className='w-screen py-36 lg:px-16 px-8'>
        {/* footer-section-1/3 */}
        <div className='flex items-center justify-between flex-wrap lg:gap-0 md:gap-0 gap-5'>
          <img src={logo} className='w-44' />
          <div className='flex gap-2 items-center justify-center lg:mx-0 md:mx-0 mx-28'>
            {
              socialMediaContactsLogo.map((logo, index) => <img src={logo} key={index} alt='socialMediaContactsLogo' className='w-8 h-8' />)
            }
          </div>
        </div>

        {/* footer-section-2/3 */}
        <div className='links grid lg:grid-cols-4 grid-col-2 grid-flow-col lg:grid-rows-1 grid-rows-2  lg:justify-between md:justify-normal justify-between lg:gap-40 gap-0 py-20'>
          {
            footerLinks?.map((footerLink, index) => <div key={index} className='flex flex-col'>
              <h1 className='footerHeadings'>{footerHeadings?.[index]}</h1>
              {footerLink[footerHeadings[index]].map((link, linkIndex) => (
                <Link key={linkIndex} to={link.href} className='footerLinks'>{link.title}</Link>
              ))}
            </div>)
          }
        </div>


      </div>
      {/* footer-section-3/3 */}
      <div className='bg-gray-50 w-full grid place-items-center gap-4 py-10'>
        <div className='flex lg:gap-8 gap-2 text-sm text-gray-500 flex-wrap justify-center'>
          {
            footerExtraLinks?.map(({ href, title }, index) => (
              <Link to={href} key={index} className='footerLinks'>
                {title}
              </Link>
            ))
          }
        </div>
        <div className='text-sm text-center'>© 2024 Printify, Inc. All rights reserved.</div>
      </div>

    </div>
  )
}

export default Footer