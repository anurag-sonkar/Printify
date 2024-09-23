import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import ReviewCard from '../miscellaneous/ReviewCard';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { reviews } from '../../data/reviews';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="next-arrow custom-arrow" onClick={onClick}>
            <GrNext size={18} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="prev-arrow custom-arrow" onClick={onClick}>
            <GrPrevious size={18} />
        </div>
    );
};

function Reviews() {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div className="custom-dots-container">
                <ul className="custom-dots"> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Animation is triggered when the element comes into view
                    observer.unobserve(textRef.current); // Stop observing after animation triggers
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the element is in view
        );

        if (textRef.current) {
            observer.observe(textRef.current);// Observe the text element
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current); // Clean up observer on unmount 
            }
        };
    }, []);

    return (
        <div className='py-36 px-12 bg-[#F7F7F7]'>
            {/* 1/2 */}
            {/* <div className='flex items-center justify-start flex-wrap gap-9'>
              <div className='text-5xl font-bold lg:max-w-[40vw]'>Trusted by over 8M sellers around the world</div>
              <div className='lg:max-w-96  text-gray-600'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</div>
        </div> */}
            <div className='flex items-center justify-start flex-wrap gap-9 lg:px-4 px-0'>
                <div className='text-5xl font-bold lg:max-w-[40vw] '>Trusted by over 8M sellers around the world</div>
                <div
                    ref={textRef}
                    className={`lg:max-w-96 text-gray-600 transition-transform duration-1000 ease-in-out ${isVisible ? 'lg:translate-x-0' : 'lg:-translate-x-full'}`}
                >
                    Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                </div>
            </div>
            {/* 2/2 */}
            <div className="slider-container py-20">
                <Slider {...settings}>
                    {
                        reviews?.length > 0 && reviews.map((review, index) => <ReviewCard key={index} {...review} />)
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Reviews