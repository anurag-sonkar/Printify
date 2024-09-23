import React from 'react'
import { GoArrowRight } from "react-icons/go";



function AddDesign() {
    return (
        <div className='bg-[#F7F7F7] -mb-1 design w-full design lg:px-12 px-4 py-32  '>
            <div className='bg-white flex items-center justify-between lg:flex-row flex-col rounded-3xl'>
                <div className='design-bg relative'>
                    <img src='assets/addDesign/clothes.webp' className='lg:w-[40vw] w-full ' />
                    <img src='assets/addDesign/clothes-bottom.svg' className='lg:w-[30vw] h-auto absolute bottom-0 right-0' />

                </div>
                <div className='max-w-[38rem] flex flex-col gap-10 lg:px-16 px-6 lg:py-0 py-8'>
                    <h1 className='font-semibold lg:text-4xl text-2xl'>Easily add your design to a wide range of products</h1>
                    <div className='text-gray-500'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</div>
                    <div className='flex items-center gap-2 allProducts-btn'>

                        <button>All products</button>
                        <div><GoArrowRight /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDesign