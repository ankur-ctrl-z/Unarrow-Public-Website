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
    infinite: true, // Enables continuous loop sliding
    slidesToShow: 1, // Only one slide visible at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enables autoplay for the slideshow
    autoplaySpeed: 3000, // Slide transition every 5 seconds
    speed: 1000, // Slide transition duration (1 second)
    cssEase: "linear", // Smooth transition
    // pauseOnHover: true, // Pause on hover for better user interaction
    dots: true, // Enables navigation dots below the slides
  };

  return (
    <div className="w-full relative h-full bg-[#011415] py-2 lg:py-10">
      <div className="w-11/12 mx-auto flex flex-col justify-center">
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
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, non. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, non.'
            } 
          />
          <ClientsReviewCard 
            img={DivineFitness} 
            clientName={'Dr. Khushbu Sharma '} 
            clientProfession={'Divine Fitness'}  
            feedback={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, non. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, non.'
            }
          />
        </Slider>
      </div>
    </div>
  );
};

export default ClientsFeedback;
