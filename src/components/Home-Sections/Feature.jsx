import React from 'react'
import { features } from '../../data/features'



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