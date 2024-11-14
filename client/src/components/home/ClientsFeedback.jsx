import React from "react";
import ClientsReviewCard from "../customs/ClientsReviewCard";
import oneTouch from "../../assets/feedbackImage/poonam_ambavat_.jpg";
import SJACare from '../../assets/feedbackImage/Dr.Dubey.jpg';
import DivineFitness from "../../assets/feedbackImage/khushbu_sharma.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Feedback.css';

const ClientsFeedback = () => {
  const settings = {
    infinite: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 7000, 
    speed: 1000,
    cssEase: "linear", 
    dots: true,
  };

  return (
    <div className="w-full relative h-full bg-[#011415] py-2 lg:py-10">
      <div className="w-11/12 mx-auto flex flex-col -mb-[28rem] sm:mb-10 justify-center">
        <div className="text-white font-Roboto font-bold">
          <div className="flex items-center justify-center gap-4 lg:ml-14">
            <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
              Client’s Review
            </h3>
          </div>
        </div>

        {/* Slider Component */}
        <Slider className="mt-4" {...settings}>
          <ClientsReviewCard 
            img={oneTouch} 
            clientProfession={'One Touch Agency'} 
            clientName={'Poonam Ambavat'} 
            feedback={
              'Exceptional digital agency with innovative strategies, responsive communication, and top-notch creativity. They delivered beyond expectations, driving impressive results. Highly recommend for anyone seeking to elevate their online presence and achieve business growth.'
            } 
          />
          <ClientsReviewCard 
            img={SJACare} 
            clientName={"Dr. DS Dubey"} 
            clientProfession={'SJA Care Center'} 
            feedback={
              'Unarrow Digital Solutions delivered a stunning website that truly represents our brand and continues to manage it with precision. Their social media expertise has also boosted our online presence, keeping our audience engaged and connected. A dedicated and talented team!'
            } 
          />
          <ClientsReviewCard 
            img={DivineFitness} 
            clientName={'Dr. Khushbu Sharma '} 
            clientProfession={'Divine Fitness'}  
            feedback={
              'Unarrow Digital Solutions has been invaluable in managing our social media and digital marketing. Their creative approach and consistent engagement have significantly boosted our online presence, connecting us with our audience in meaningful ways. It’s a pleasure seeing our brand grow with Unarrow’s expertise and dedication.'
            }
          />
        </Slider>
      </div>
    </div>
  );
};

export default ClientsFeedback;
