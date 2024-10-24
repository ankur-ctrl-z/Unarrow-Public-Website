import React from "react";
import Tanul from "../../assets/TeamMemberImage/Tanul.png";
import Abhishek from "../../assets/TeamMemberImage/Abhishek.png";
import Ankur from "../../assets/TeamMemberImage//Ankur.png";
import Prateek from "../../assets/TeamMemberImage/Prateek.png";
import '../styles/team.css'

import { FaFacebookF, FaTwitter, FaLinkedinIn ,FaInstagram} from 'react-icons/fa';

const OurTeamMember = () => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-14">
      <div className="w-11/12 mx-auto -mt-5 lg:-mt-10">
        <div className="">
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
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center mr-2 gap-2 md:gap-7 mt-4 ">

            <div class=" w-full h-[12rem] md:w-[10.8rem] md:h-[14rem] lg:w-[14.5rem] xl:w-[20rem] xl:h-[24rem] lg:ml-0 lg:h-[20rem] hover:scale-105 duration-500 transition-all flex-shrink-0 border-2 rounded-3xl relative overflow-hidden">
              <div class="card profile-two">
                <div class="card-image profile-img--two">
                  <img
                    src={Ankur}
                    alt="profile two"
                  />
                </div>

                <ul class="social-icons flex justify-center items-center lg:mt-5">
                  <li className="flex justify-center items-center" >
                    <a href="" >
                      <FaFacebookF className="m-1 md:m-[6px] lg:m-3 hover:text-[#1877F2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                    <FaLinkedinIn className="m-1 md:m-[6px] lg:m-3 hover:text-[#0A66C2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                     <FaTwitter className="m-1 md:m-[6px] lg:m-3 hover:text-[#1DA1F2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                      <FaInstagram className="m-1 md:m-[6px] lg:m-3 hover:text-[#F58529]" />
                    </a>
                  </li>
                </ul>

                <div class="details jane">
                  <h2 className="font-semibold">
                   Ankur
                    <br/>
                    <span class="job-title font-semibold">Web Developer</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full h-[12rem] md:w-[10.8rem] md:h-[14rem] lg:w-[14.5rem] xl:w-[20rem] xl:h-[24rem] lg:ml-0 lg:h-[20rem] hover:scale-105 duration-500 transition-all flex-shrink-0 border-2 rounded-3xl relative overflow-hidden">
              <div class="card profile-two">
                <div class="card-image profile-img--two">
                  <img
                    src={Abhishek}
                    alt="profile two"
                  />
                </div>

                <ul class="social-icons flex justify-center items-center lg:mt-5">
                  <li className="flex justify-center items-center" >
                    <a href="" >
                      <FaFacebookF className="m-1 md:m-[6px] lg:m-3 hover:text-[#1877F2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                    <FaLinkedinIn className="m-1 md:m-[6px] lg:m-3 hover:text-[#0A66C2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                     <FaTwitter className="m-1 md:m-[6px] lg:m-3 hover:text-[#1DA1F2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                      <FaInstagram className="m-1 md:m-[6px] lg:m-3 hover:text-[#F58529]" />
                    </a>
                  </li>
                </ul>

                <div class="details jane">
                  <h2>
                    Abhishek Gupta
                    <br/>
                  <span class="job-title text-">Social Media Expert</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full h-[12rem] md:w-[10.8rem] md:h-[14rem] lg:w-[14.5rem] xl:w-[20rem] xl:h-[24rem] lg:ml-0 lg:h-[20rem] hover:scale-105 duration-500 transition-all flex-shrink-0 border-2 rounded-3xl relative overflow-hidden">
              <div class="card profile-two">
                <div class="card-image profile-img--two">
                  <img
                    src={Prateek}
                    alt="profile two"
                  />
                </div>

                <ul class="social-icons flex justify-center items-center lg:mt-5">
                  <li className="flex justify-center items-center" >
                    <a href="" >
                      <FaFacebookF className="m-1 md:m-[6px] lg:m-3 hover:text-[#1877F2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                    <FaLinkedinIn className="m-1 md:m-[6px] lg:m-3 hover:text-[#0A66C2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                     <FaTwitter className="m-1 md:m-[6px] lg:m-3 hover:text-[#1DA1F2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                      <FaInstagram className="m-1 md:m-[6px] lg:m-3 hover:text-[#F58529]" />
                    </a>
                  </li>
                </ul>

                <div class="details jane">
                  <h2 className="font-bold">
                     Prateek Pandey
                    <br/>
                    <span class="job-title">SEO Expert</span>
                  </h2>
                </div>
              </div>
            </div>


            <div className="w-full h-[12rem] md:w-[10.8rem] md:h-[14rem] lg:w-[14.5rem] xl:w-[20rem] xl:h-[24rem] lg:ml-0 lg:h-[20rem] hover:scale-105 duration-500 transition-all flex-shrink-0 border-2 rounded-3xl relative overflow-hidden">
              <div class="card profile-two">
                <div class="card-image profile-img--two">
                  <img
                    src={Tanul}
                    alt="profile two"
                  />
                </div>

                <ul class="social-icons flex justify-center items-center lg:mt-5">
                  <li className="flex justify-center items-center" >
                    <a href="" >
                      <FaFacebookF className="m-1 md:m-[6px] lg:m-3 hover:text-[#1877F2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                    <FaLinkedinIn className="m-1 md:m-[6px] lg:m-3 hover:text-[#0A66C2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                     <FaTwitter className="m-1 md:m-[6px] lg:m-3 hover:text-[#1DA1F2]"/>
                    </a>
                  </li>
                  <li className="flex justify-center items-center">
                    <a href="">
                      <FaInstagram className="m-1 md:m-[6px] lg:m-3 hover:text-[#F58529]" />
                    </a>
                  </li>
                </ul>

                <div class="details jane">
                  <h2 >
                    Tanul
                    <br/>
                    <span class="job-title">UI/UX Designer</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamMember;
