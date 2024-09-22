import React from 'react'
import ConnectionCard from '../ConnectionCard'

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
    // {
    //     storename: "squarespace",
    //     logo: "assets/connect/squarespace.svg",
    //     position : {top:'20%' , left : '60%'},
    //     size : "small"
    // },
    
]
function ConnectStore() {
  return (
      <div className='relative w-full h-screen grid place-items-center'>
    {/* center main logo */}
          <ConnectionCard image={"assets/connect/printify.svg"} bgColor="primary"/>

    {/* other logo's connection */}
    {
              connections.map(({ storename, logo, position,size }) => <div className='connect-logo absolute' style={{ top: position.top, left: position.left }}>
                  <ConnectionCard image={logo} bgColor="white" size={size}/>

              </div>)
    }

    </div>
  )
}

export default ConnectStore