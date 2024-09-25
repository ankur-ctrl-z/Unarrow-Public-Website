import React from "react";
import serviceImage from "../../../assets/servicesImage/servicesImage.png";
import LeftCustomHeading from "../../customs/LeftCustomHeading";
import CenterCustomHeading from "../../customs/CenterCustomHeading";
import CustomArrow from "../../customs/CustomArrow";
import CustomButton from "../../customs/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ClientsFeedback from "../../home/ClientsFeedback";
import CustomOverlappingCards from "../../customs/CustomOverlappingCards";

const PPC = () => {
  const navigate = useNavigate();
  function handleCall() {
    navigate("/contact");
  }

  return (
    <div className="w-full relative h-full bg-black py-32">
      <div className="w-11/12 mx-auto p-8">
        {/* Centered heading */}
        <CenterCustomHeading
          className="flex justify-center items-center"
          heading="PAY PER CLICK"
        />

        {/* Description paragraph */}
        <p className="text-white mt-5 font-Roboto text-[0.937rem] font-normal leading-normal">
          The digital age has been continuously evolving. Over 4.66 billion
          people use the internet daily. It is transforming the way businesses
          operate. You can now get an online store that is open all day and
          night. Moreover, this shop can be easily accessed from anywhere. This
          is the potency of a website! A website doesn’t just help you establish
          a connection with your consumers; it also helps to create a unique
          user experience and build loyalty. A good web design and development
          service in India helps you have a digital address.
        </p>

        {/* Parent div for content sections */}
        <div className="flex justify-center gap-20 mt-10 mx-auto">
          {/* Left section */}
          <div className="w-1/2">
            <div className="flex flex-col gap-1">
              <LeftCustomHeading heading="Build Your Identity With A Web Design and Development Company in India" />
              <p className="text-white mt-5 font-Roboto text-[0.937rem] font-normal leading-normal">
                Websites are a necessity in this tech-savvy world. Web design
                includes visually appealing colors, fonts, and pictures. Web
                development gives a perspective to the website page. Coders in
                top web design and development companies use programming
                languages to create user-friendly websites that can function
                efficiently. An appealing website can help reflect your brand
                identity and attract visitors.
              </p>
            </div>

            {/* Importance section */}
            <div className="mt-5">
              <LeftCustomHeading heading="Importance of Website For Your Online Presence" />

              <ol className="text-white list-decimal ml-5 mt-2 space-y-2">
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

          {/* Right section */}
          <div className="w-1/2 mb-20 z-10">
            <CustomOverlappingCards image={serviceImage} />{" "}
            {/* Fixed typo in "serviceImage" */}
          </div>
        </div>

        <div className="mt-5">
          <LeftCustomHeading heading={"Why is Responsive Design Important?"} />
          <p className="text-white mt-5 font-Roboto text-[0.937rem] font-normal leading-normal">
            A responsive website design comes with a lot of benefits. We at
            Brandhype, design and develop your business websites in the best
            way. Here are some reasons why you should go for responsive web
            design by our experts.
          </p>

          <ol className="text-white list-decimal ml-5 mt-2 space-y-2">
            <li>
              <strong> Mobile-Friendly Website :</strong>{" "}
              <span>
                Most people use phones to browse the web. A responsive website
                makes sure your site is mobile-friendly.
              </span>
            </li>
            <li>
              <strong>Improved User Experience: </strong>{" "}
              <span>
                A responsive website is easy to navigate on any device. This
                keeps visitors happy and engaged.
              </span>
            </li>
            <li>
              <strong>Better Search Engine Ranking: </strong>{" "}
              <span>
                Search engines like Google favor mobile-friendly websites.
                Responsive design helps your website rank higher in search
                results.
              </span>
            </li>
            <li>
              <strong>Boosts Conversions: </strong>{" "}
              <span>
                A well-designed website encourages visitors to take action. It
                helps your business get more conversions.
              </span>
            </li>
          </ol>
        </div>
      </div>

      {/* custom theams */}
      <div className="w-full flex flex-col justify-center items-center py-10 bg-[#354171]">
        <div className="text-center text-white max-w-[66rem] py-2 font-Roboto text-[2.5rem] leading-[3rem] font-bold">
          Call Unarrow, a top-notch Website Designing Company in Mumbai.
        </div>

        {/* horizontal-line */}
        <div className="h-[1.5px] w-[74rem] mt-5 bg-red-600"></div>

        {/* contact-details */}
        <div className="flex gap-5  mt-8 justify-center items-center text-xl">
          <div className="w-[21rem] py-3 flex justify-center bg-white rounded-2xl">
            {" "}
            <a
              className="text-black font-bold text-xl"
              href="tel:+91 8433700215"
            >
              +91 8433700215
            </a>
          </div>
          <div className="w-[21rem] py-3 flex justify-center bg-white rounded-2xl">
            {" "}
            <a
              className="text-black font-bold"
              href="mailto:tanul@unarrow@gmail.com"
            >
              tanul@unarrow@gmail.com
            </a>
          </div>
        </div>

        <div
          onClick={handleCall}
          className="flex justify-center items-center w-[12rem] mt-8"
        >
          <CustomButton label={"Consult Now"} />
          <CustomArrow icon={<FiArrowUpRight />} />
        </div>
      </div>

      {/* clients feedback */}
      <div className="-mb-32">
        <ClientsFeedback />
      </div>
    </div>
  );
};

export default PPC;