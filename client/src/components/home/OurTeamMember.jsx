import React from "react";
import Tanul from "../../assets/TeamMemberImage/Tanul.png";
import Abhishek from "../../assets/TeamMemberImage/Abhishek.png";
import Ankur from "../../assets/TeamMemberImage//Ankur.png";
import Prateek from "../../assets/TeamMemberImage/Prateek.png";
import CustomTeamMember from "../customs/CustomTeamMember";

const OurTeamMember = () => {
  return (
    <div className="w-full relative h-full bg-[#011415] py-14">
      <div className="w-11/12 mx-auto ">
        <div className="">
          <p className="text-white text-lg font-Roboto ml-[5.6rem] mb-1">
            Our Team
          </p>
          <div className="flex items-center gap-4 ml-14 mb-14">
            <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
            <h3 className="text-4xl text-white font-bold font-Roboto">
              Awesome Team Member
            </h3>
          </div>

          {/* team-members-image */}
          <div className="flex justify-center gap-5">
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
