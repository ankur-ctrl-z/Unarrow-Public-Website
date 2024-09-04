import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    { id: 1, content: <div className=" text-red-500">REQUIREMENTS</div> },
    { id: 2, content: <div className="">DESIGN</div> },
    { id: 3, content: <div>IMPLEMENT</div> },
    { id: 4, content: <div>TESTING</div> },
    { id: 5, content: <div>DEPLOYMENT</div> },
    { id: 6, content: <div>MAINTENANCE</div> },
  ];

  return (
    <div className="w-full h-full relative bg-[#011415] overflow-x-clip">
      <div className="bg-[#354171]">
        <Slider {...settings}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex justify-center items-center mt-20 space-x-10 mb-10 gap-3"
            >
              <div className="w-6 h-6 -mb-[4.5rem] rounded-full bg-red-500"></div>
              <div className="font-Roboto text-[5rem] font-bold leading-normal text-gray-300">
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
