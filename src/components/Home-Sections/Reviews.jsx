import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from '../ReviewCard';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const reviews = [
    {
        avatar: "assets/reviews/robert-voltaire.png",
        name : "robert a. voltair",
        ratings : 5,
        comment: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! " 
    },
    {
        avatar: "assets/reviews/quinten-barney.png",
        name : "robert a. voltair",
        ratings : 3,
        comment: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! " 
    },
    {
        avatar: "assets/reviews/spencer-brett-kyle.png",
        name : "robert a. voltair",
        ratings : 4,
        comment: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! " 
    },
    {
        avatar : "assets/reviews/nikki.png",
        name : "robert a. voltair",
        ratings : 5,
        comment: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! " 
    },
    {
        avatar: "assets/reviews/april-showers.jpeg",
        name : "robert a. voltair",
        ratings : 4,
        comment: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! " 
    },
]

// Custom Arrow components
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="next-arrow custom-arrow" onClick={onClick}>
            <GrNext />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="prev-arrow custom-arrow" onClick={onClick}>
            <GrPrevious />
        </div>
    );
};

function Reviews() {
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
  return (
      <div className='py-36 px-12 bg-[#F7F7F7]'>
        {/* 1/2 */}
        <div className='flex items-center justify-start flex-wrap gap-9'>
              <div className='text-5xl font-bold lg:max-w-[40vw]'>Trusted by over 8M sellers around the world</div>
              <div className='lg:max-w-96  text-gray-600'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</div>
        </div>
        {/* 2/2 */}
          <div className="slider-container py-20">
              <Slider {...settings}>
                  {
                    reviews?.length > 0 && reviews.map((review , index)=><ReviewCard key={index} {...review} />)
                  }
              </Slider>
          </div>
      </div>
  )
}

export default Reviews