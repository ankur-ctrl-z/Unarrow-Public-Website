import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slider.css'

const CardSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    speed: 7000, // Adjust for smoothness
    cssEase: "linear",
    pauseOnHover: true,
  };

  const cards = [
    { id: 1, content: <div className="text">REQUIREMENTS</div> },
    { id: 2, content: <div className="">DESIGN</div> },
    { id: 3, content: <div className="text">IMPLEMENT</div> },
    { id: 4, content: <div>TESTING</div> },
    { id: 5, content: <div className="text">DEPLOYMENT</div> },
    { id: 6, content: <div>MAINTENANCE</div> },
  ];

  return (
    <div className="w-full h-full relative bg-[#011415] overflow-x-clip">
      <div className="bg-[#354171] ">
        <Slider {...settings}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex justify-center items-center gap-6 md:gap-8 lg:gap-14 xl:gap-20 mt-5 lg:mt-10 xl:mt-14 mb-4"
            >
              <div className="w-3.5 h-3.5 -mb-5 lg:-mb-12 xl:-mb-[4.4rem]  lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] rounded-full bg-red-500"></div>
              <div className="font-Roboto ml-5 lg:ml-10 text-lg lg:text-[3rem] xl:text-[4.5rem] font-bold leading-normal text-gray-300">
                {card.content}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
