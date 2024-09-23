import React from 'react'

function ReviewCard({ avatar,ratings,comment,name }) {
    return (
        <div className='rounded-2xl lg:px-10 lg:py-10 md:px-10 md:py-10 px-4 py-5 bg-white mx-3 grid lg:gap-10 md:gap-10 gap-6'>
            <div className='flex gap-8'>
                <img src={avatar} alt='avatar' className='w-16 h-16 rounded-md object-cover'/>
                <div>
                    <h1 className='font-bold text-2xl capitalize'>{name}</h1>
                    <div>⭐⭐⭐⭐⭐</div>
                </div>

            </div>

            <div>{comment}</div>
            
        </div>
    )
}

export default ReviewCard