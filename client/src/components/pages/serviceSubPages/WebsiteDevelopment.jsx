import React from "react";
import webDev from "../../../assets/servicesImage/website Dev.jpg";
import LeftCustomHeading from "../../customs/LeftCustomHeading";
import CenterCustomHeading from "../../customs/CenterCustomHeading";
import CustomArrow from "../../customs/CustomArrow";
import CustomButton from "../../customs/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ClientsFeedback from "../../home/ClientsFeedback";
import CustomOverlappingCards from "../../customs/CustomOverlappingCards";

const WebDev = () => {
  const navigate = useNavigate();

  function handleCall() {
    navigate("/contact");
  }

  return (
    <div className="w-full relative h-full bg-black py-20 md:py-24 lg:py-32">
      <div className="w-11/12 mx-auto p-4 md:p-8">
        {/* Centered heading */}
        <CenterCustomHeading
          className="flex justify-center mt-5 md:-mt-3 items-center"
          heading="WEB DEVELOPMENT"
        />

        {/* Description paragraph */}
        <p className="text-white mt-5 font-Roboto text-sm md:text-base lg:text-lg font-normal leading-normal">
          The digital age has been continuously evolving. Over 4.66 billion
          people use the internet daily. It is transforming the way businesses
          operate. You can now get an online store that is open all day and
          night. Moreover, this shop can be easily accessed from anywhere. This
          is the potency of a website! A website doesn’t just help you establish
          a connection with your consumers; it also helps to create a unique
          user experience and build loyalty. A good web design and development
          service in India helps you have a digital address.
        </p>

        {/* Responsive Content Sections */}
       
         
          <div className="flex flex-col-reverse mt-[12rem] -ml-12 md:flex-row w-full gap-8">
          
            <div  className="w-full md:w-1/2 mt-[12rem] ml-[2rem] md:-mt-[12rem]" >
          
              <LeftCustomHeading className={'mt-10 ml-[1px]'} heading="Build Your Identity With A Web Design and Development Company in India" />
              <p className="text-white ml-4 mt-5 font-Roboto text-sm md:text-base lg:text-lg font-normal leading-normal">
                Websites are a necessity in this tech-savvy world. Web design
                includes visually appealing colors, fonts, and pictures. Web
                development gives a perspective to the website page. Coders in
                top web design and development companies use programming
                languages to create user-friendly websites that can function
                efficiently. An appealing website can help reflect your brand
                identity and attract visitors.
              </p>
            </div>

            <div className="w-full md:w-1/2 -mt-[11rem] lg:-mt-[36rem] lg:-ml-[6rem] xl:-ml-[2rem] xl:-mb-20 2xl:-mb-40 flex justify-center items-center">
            <CustomOverlappingCards image={webDev} />
          </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-10">
            {/* Importance Section */}
            <div className="w-full xl:max-w-[48rem] 2xl:max-w-[47rem]">
              <LeftCustomHeading heading="Importance of Website For Your Online Presence" />
              <ol className="text-white list-decimal ml-5 mt-2 space-y-2 text-sm md:text-base lg:text-lg">
                <li>
                  <strong>Immense Presence:</strong>{" "}
                  <span>
                    Billions of people use the internet, and you can tap them
                    all with a good website design.
                  </span>
                </li>
                <li>
                  <strong>Always Accessible:</strong>{" "}
                  <span>
                    A website can be accessed anytime and anywhere. There are no
                    limited hours, unlike offline shops.
                  </span>
                </li>
                <li>
                  <strong>Reliability:</strong>{" "}
                  <span>
                    A user-friendly website can help to build trust and
                    establish your brand value.
                  </span>
                </li>
                <li>
                  <strong>Targeted Reach:</strong>{" "}
                  <span>
                    A well-designed website will help you reach your specific
                    audience through robust marketing strategies.
                  </span>
                </li>
              </ol>
            </div>
        </div>

        {/* Responsive Section - Importance of Responsive Design */}
        <div className="mt-10">
          <LeftCustomHeading heading={"Why is Responsive Design Important?"} />
          <p className="text-white mt-5 font-Roboto text-sm md:text-base lg:text-lg font-normal leading-normal">
            A responsive website design comes with a lot of benefits. We at
            Brandhype, design and develop your business websites in the best
            way. Here are some reasons why you should go for responsive web
            design by our experts.
          </p>

          <ol className="text-white list-decimal ml-5 mt-2 space-y-2 text-sm md:text-base lg:text-lg">
            <li>
              <strong>Mobile-Friendly Website:</strong>{" "}
              <span>
                Most people use phones to browse the web. A responsive website
                makes sure your site is mobile-friendly.
              </span>
            </li>
            <li>
              <strong>Improved User Experience:</strong>{" "}
              <span>
                A responsive website is easy to navigate on any device. This
                keeps visitors happy and engaged.
              </span>
            </li>
            <li>
              <strong>Better Search Engine Ranking:</strong>{" "}
              <span>
                Search engines like Google favor mobile-friendly websites.
                Responsive design helps your website rank higher in search
                results.
              </span>
            </li>
            <li>
              <strong>Boosts Conversions:</strong>{" "}
              <span>
                A well-designed website encourages visitors to take action. It
                helps your business get more conversions.
              </span>
            </li>
          </ol>
        </div>
      </div>

      {/* Custom Themes Section */}
      <div className="w-full flex flex-col justify-center items-center py-10 bg-[#354171] -mb-20 md:-mb-24 lg:-mb-32">
        <div className="text-center text-white max-w-3xl px-4 py-2 font-Roboto text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug lg:leading-snug font-bold">
          Call Unarrow, a top-notch Website Designing Company in Mumbai.
        </div>

        {/* Horizontal Line */}
        <div className="h-[1.5px] w-full max-w-xl mt-5 bg-red-600"></div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row gap-5 mt-8 justify-center items-center text-lg">
          <div className="w-full md:w-auto py-3 px-4 flex justify-center bg-white rounded-2xl">
            <a className="text-black font-bold" href="tel:+91 8433700215">
              +91 8433700215
            </a>
          </div>
          <div className="w-full md:w-auto py-3 px-4 flex justify-center bg-white rounded-2xl">
            <a className="text-black font-bold" href="mailto:tanul@unarrow@gmail.com">
              tanul@unarrow@gmail.com
            </a>
          </div>
        </div>

        <div onClick={handleCall} className="flex justify-center items-center w-[12rem] mt-8">
          <CustomButton label={"Consult Now"} />
          <CustomArrow icon={<FiArrowUpRight />} />
        </div>
      </div>

      {/* Clients Feedback */}
      {/* <div className="mt-16 md:-mb-32">
        <ClientsFeedback />
      </div> */}
    </div>
  );
};

export default WebDev;
