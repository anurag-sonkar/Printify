import React from 'react'
import feature1 from "/assets/feature/higher-profits.svg"
import feature2 from "/assets/feature/robust-scaling.svg"
import feature3 from "/assets/feature/best-selection.svg"

const features = [
    {
        id : 0,
        image : feature1,
        heading: "Higher Profits",
        paragraph: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
    },
    {
        id : 1,
        image : feature2,
        heading: "Robust Scaling",
        paragraph: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
    },
    {
        id : 2,
        image : feature3,
        heading: "Best Selection",
        paragraph: "With 900+ products and top quality brands, you can choose the best products for your business."
    },
]


function Feature() {
  return (
      <div className='px-8 py-32 grid grid-cols-3 w-full place-items-center lg:gap-0 md:gap-0 gap-4'>
        {
            features.map((feature , index)=>(
                <div key={index} className=' lg:w-[280px] lg:h-[350px] md:w-[230px] md:h-[350px] w-[300px] h-[380px] px-6 py-6 flex flex-col gap-6 justify-center items-center cursor-pointer lg:col-span-1 md:col-span-1 col-span-3'>
                    <img src={feature.image} className='max-w-32'/>
                    <h1 className='lg:text-2xl text-xl font-semibold'>{feature.heading}</h1>
                    <p className='text-gray-600 text-center text-pretty text-md'>{feature.paragraph}</p>
                </div>
            ))
        }

    </div>
  )
}

export default Feature