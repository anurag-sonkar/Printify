import React, { useEffect, useState } from 'react';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500); // st at 2.5 sec

        return () => clearInterval(interval); // cleanupp
    }, [images.length]);

    return (
        <div className='flex justify-center items-center h-48 w-48'> {/* Added height and background for visibility */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={image} className='object-contain max-h-48' /> {/* Adjusted height */}
                </div>
            ))}
        </div>
    );
}

export default Carousel;
