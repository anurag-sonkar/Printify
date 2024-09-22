import React from 'react'
import { FaCheck, FaRegCirclePlay } from "react-icons/fa6";
import Button from '../Button';
import Carousel from '../Carousel';
import image from "/assets/hero/caro1.webp"
import image2 from "/assets/hero/caro2.webp"
import image3 from "/assets/hero/caro3.png"
import image4 from "/assets/hero/caro4.webp"
{/* <Button bgColor="red" variant="filled" icon={<FaRegCirclePlay />} style={{ padding: "20px 10px" }}>Signup</Button> */ }

const checkPoints = [

    " 100% Free to use",
    "900+ High - Quality Products",
    "Largest global print network"

]

const images = [
    image,
    image2,
    image3,
    image4
]

function Hero() {
    return (
        <div className='hero relative py-12 px-0 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-6 gap-16 overflow-hidden'>


            {/* left-container */}
            <div className='col-span-1 flex gap-6 flex-col'>
                <h1 className='font-bold lg:text-5xl text-4xl max-w-96 lg:leading-snug leading-tight'>Create and sell custom products</h1>
                <div className='flex flex-col gap-3'>
                    {checkPoints.map((check, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <div><FaCheck /></div>
                            <div className='text-lg font-semibold text-gray-600'>{check}</div>
                        </div>
                    ))}
                </div>

                <div className='flex gap-2'>
                    <Button bgColor="primary" variant="filled" style={{ color: "white", padding: "0.8rem 0.9rem", fontSize: "1.1rem", fontWeight: "500" }}>Start for free</Button>
                    <Button variant="outlined" style={{ padding: "0.8rem 0.9rem", fontSize: "1.1rem", fontWeight: "500" }} icon={<FaRegCirclePlay size={22} />}>Learn More</Button>
                </div>

                <div className='font-semibold'>Trusted by over 8M sellers around the world</div>
            </div>

            {/* right-container */}
            <div className='col-span-1 relative'>
                <div className='relative'>
                    {/* Shirt image */}
                    <img src='assets/shirt.png' className='object-contain max-h-96 w-full' />

                    {/* Carousel */}
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                        <Carousel images={images} />
                    </div>
                </div>

                {/* Grey background strip */}
                <div className='absolute -top-56 -right-96 bg-gray-200 lg:h-[200vh] lg:w-[25vw] md:h-[300vh] md:w-[35vw] h-[600vh] w-[55vw] origin-top rotate-45 -skew-y-12 -z-20'></div> {/* Positioned behind the content */}

            </div>



        </div>

    )
}

export default Hero