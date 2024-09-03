import React from "react";
import Header from "./Header";
import Services from "./Services";
import About from "./About";
import BuildIdea from "./BuildIdea";
import WorkProcess from "./WorkProcess";
import OurWorks from "./OurWorks";
import ClientsFeedback from "./ClientsFeedback";
import OurTeamMember from "./OurTeamMember";
import CustomTheams from "../customs/CustomTheams";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <BuildIdea />
      <WorkProcess />
      <OurWorks />
      <ClientsFeedback />
      <OurTeamMember />
      <CustomTheams
        text={
          <>
          Scale Your Buisness Online Get a <span className="text-gray-400 italic font-extrabold">Free Consultation From our Experts...</span>
          </>
        }
      />
    </>
  );
};

export default Home;
