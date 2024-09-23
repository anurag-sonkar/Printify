import React from 'react'

function AddDesignCard({ image, heading1, heading2, para }) {
  return (
    <div className='flex flex-col gap-5 justify-center'>
        <img src={image} alt='design' className='object-contain w-44 table lg:mx-0 md:mx-0 mx-auto'/>
          <div><h1 className='heading1'>{heading1}</h1>
              <h1 className='heading2'>{heading2}</h1></div>
          <p className='max-w-80 mx-auto'>{para}</p>
    </div>
  )
}

export default AddDesignCard