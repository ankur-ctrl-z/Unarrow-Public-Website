import React from "react";
import Tanul from "../../assets/TeamMemberImage/Tanul.png";
import Abhishek from "../../assets/TeamMemberImage/abhishek_gupta.jpg";
import Ankur from "../../assets/TeamMemberImage/Ankur.png";
import Prateek from "../../assets/TeamMemberImage/pratik_pandey.jpg";
import '../styles/team.css'

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const OurTeamMember = () => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-14">
      <div className="w-11/12 mx-auto -mt-5 lg:-mt-10">
        <p className="text-white text-xs lg:text-lg font-Roboto md:ml-4 lg:ml-20 lg:-mb-12">
          Our Team
        </p>
        <div className="flex items-center gap-2 lg:gap-4 mr-5 lg:ml-14 lg:py-14">
          <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
          <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
            Awesome Team Member
          </h3>
        </div>

        {/* team-members-image */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center mr-2 gap-2 md:gap-7 mt-4">
          {[
            { img: Ankur, name: "Ankur Sharma", title: "Web Developer" },
            { img: Abhishek, name: "Abhishek Gupta", title: "Social Media Expert" },
            { img: Prateek, name: "Pratik Pandey", title: "SEO Expert" },
            { img: Tanul, name: "Tanul Yadav", title: "UI/UX Designer" }
          ].map(member => (
            <div key={member.name} className="w-full h-[12rem] md:w-[10.8rem] md:h-[14rem] lg:w-[14.5rem] xl:w-[20rem] xl:h-[24rem] hover:scale-105 duration-500 transition-all flex-shrink-0 border-2 rounded-3xl relative overflow-hidden">
              <div className="card profile-two">
                <div className="card-image profile-img--two">
                  <img src={member.img} alt={`profile of ${member.name}`} />
                </div>

                <ul className="social-icons flex justify-center items-center lg:mt-5">
                  <li className="flex justify-center items-center">
                    <a href="">
                      <FaFacebookF className="m-1 md:m-[6px] lg:m-3 hover:text-[#1877F2]" />
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                      <FaLinkedinIn className="m-1 md:m-[6px] lg:m-3 hover:text-[#0A66C2]" />
                    </a>
                  </li>
                  {/* <li className="flex justify-center items-center">
                    <a href="">
                      <FaTwitter className="m-1 md:m-[6px] lg:m-3 hover:text-[#1DA1F2]" />
                    </a>
                  </li> */}
                  <li className="flex justify-center items-center">
                    <a href="">
                      <FaInstagram className="m-1 md:m-[6px] lg:m-3 hover:text-[#F58529]" />
                    </a>
                  </li>
                </ul>

                <div className="details jane">
                  <h2 className="font-semibold">
                    {member.name}
                    <br />
                    <span className="job-title">{member.title}</span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamMember;
