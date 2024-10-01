import React from "react";
import ClientsReviewCard from "../customs/ClientsReviewCard";
import img1 from "../../assets/feedbackImage/review1.png";
import Abhishek from "../../assets/TeamMemberImage/Abhishek.png";
import Ankur from "../../assets/TeamMemberImage/Ankur.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Feedback.css'


const ClientsFeedback = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    autoplay:true,
    speed: 7000,
    cssEase:"linear",
    pauseOnHover: true,
    dots: true
  };

  return (
    <div className="w-full relative h-full bg-black py-2 lg:py-14">
      <div className="w-11/12 mx-auto ">
        <div className="text-white font-Roboto font-bold">
          <div className="flex items-center justify-center  gap-4 lg:ml-14 ">
            <div  className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
              Client’s Review
            </h3>
          </div>
        </div>

        <Slider className="-mt-14" {...settings}>
          <ClientsReviewCard img={img1} clientProfession={'UI/UX Designer'} clientName={'Tanul Y.'} feedback={'Exceptional digital agency with innovative strategies, responsive communication, and top-notch creativity. They delivered beyond expectations, driving impressive results. Highly recommend for anyone seeking to elevate their online presence and achieve business growth'} />
          <ClientsReviewCard img={Ankur} clientName={"Ankur Sharma"} clientProfession={'React Developer'} feedback={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, non. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, non.'} />
          <ClientsReviewCard img={Abhishek} clientName={'Abhishek'} clientProfession={'Social Media Expert'}  feedback={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, non. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, non.'}/>
        </Slider>
      </div>
    </div>
  );
};

export default ClientsFeedback;
