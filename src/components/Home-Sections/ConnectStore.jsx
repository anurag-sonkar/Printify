import React from 'react'
import ConnectionCard from '../ConnectionCard'
import Button from '../Button'

const connections = [
    {
        storename : "wix",
        logo : "assets/connect/wix.svg",
        position : {top:'8%' , left : '70%'},
        size : "medium"
    },
    {
        storename : "woo",
        logo : "assets/connect/woo.svg",
        position : {top:'20%' , left : '20%'},
        size : "small"
    },
    {
        storename : "shopify",
        logo: "assets/connect/shopify.svg",
        position : {top:'50%' , left : '20%'},
        size : "large"
    },
    {
        storename : "etsy",
        logo: "assets/connect/etsy.svg",
        position : {top:'50%' , left : '70%'},
        size : "large"
    },
    {
        storename: "presta",
        logo: "assets/connect/presta.svg",
        position : {top:'30%' , left : '60%'},
        size : "small"
    },
    {
        storename: "more-integration",
        logo: "assets/connect/more-integration.svg",
        position : {top:'64%' , left : '37%'},
        size : "small"
    },
    {
        storename: "big-commerce",
        logo: "assets/connect/big-commerce.svg",
        position : {top:'14%' , left : '37%'},
        size : "small"
    },
    
]
function ConnectStore() {
  return (
      <div className=''>
          <div className='relative w-full h-screen grid place-items-center'>
              <img src='assets/connect/arrow.png' alt="Background" className='flex absolute top-0 lg:right-[35%] -z-10 w-80 ' />
              {/* center main logo */}
              <ConnectionCard image={"assets/connect/printify.svg"} bgColor="primary" />

              {/* other logo's connection */}
              {
                  connections.map(({ storename, logo, position, size },index) => <div key={index} className='connect-logo absolute' style={{ top: position.top, left: position.left }}>
                      <ConnectionCard image={logo} bgColor="white" size={size} />

                  </div>)
              }


          </div>
          <div>
              <div className="lg:mx-44 md:mx-12 mx-4 overflow-hidden bg-[url('assets/connect/talk-to-sales.svg')] bg-right bg-no-repeat h-28 object-contain border rounded-2xl bg-[#E2F7E3] grid place-items-center">
              <div className='flex w-full justify-between items-center lg:px-24 md:px-12 px-4'>
                      <h1 className='font-bold text-green-700 text-lg lg:max-w-72 max-w-64'>Are you a large business looking for custom solutions?</h1>
                      <button className='bg-white px-4 py-1 border border-gray-400 text-sm rounded-sm'>Talk to sales</button>
              </div>
              </div>
          </div>

          

      </div>
  )
}

export default ConnectStore