import React from "react";
import Tanul from "../../assets/TeamMemberImage/Tanul.png";
import Abhishek from "../../assets/TeamMemberImage/Abhishek.png";
import Ankur from "../../assets/TeamMemberImage//Ankur.png";
import Prateek from "../../assets/TeamMemberImage/Prateek.png";
import CustomTeamMember from "../customs/CustomTeamMember";
import './team.css'

const OurTeamMember = () => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-14">
      <div className="w-11/12 mx-auto -mt-5 lg:-mt-10">
        <div className="">
          <p className="text-white text-xs lg:text-lg font-Roboto md:ml-14 md:-mb-10 ">
            Our Team
          </p>
          <div className="flex items-center gap-2 lg:gap-4 mr-5 lg:ml-14 lg:py-14">
            <div className="w-2 h-2 lg:w-4 lg:h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-xl lg:text-[2.1875rem] text-white font-bold font-Roboto">
              Awesome Team Member
            </h3>
          </div>

          {/* team-members-image */}
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center mr-2 gap-2 md:gap-5 mt-4 ">
            <CustomTeamMember image={Tanul} memberName={'Tanul. Y'} profession={'Web Designer'}/>
            <CustomTeamMember image={Abhishek} memberName={'Abhishek.'} profession={'Social Media Expert'}/>
            <CustomTeamMember image={Ankur} memberName={'Ankur.'} profession={'React Developer'}/>
            <CustomTeamMember image={Prateek} memberName={'Prateek.'} profession={'SEO Expert'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamMember;
