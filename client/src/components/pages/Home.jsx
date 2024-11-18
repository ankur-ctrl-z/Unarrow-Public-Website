import React from 'react'
import Header from '../home/Header'
import Services from '../home/Services'
import About from '../home/About'
import BuildIdea from '../home/BuildIdea'
import WorkProcess from '../home/WorkProcess'
import OurWorks from '../home/OurWorks'
import ClientsFeedback from '../home/ClientsFeedback'
import OurTeamMember from '../home/OurTeamMember'
import CustomTheams from '../customs/CustomTheams'
import Contact from '../home/Contact'
import FAQS from '../home/FAQS'


const Home = () => {
  return (
    <div>
        <Header/>
        <Services/>
        <About/>
        <BuildIdea/>
        <WorkProcess/>
        <OurWorks/>
        <ClientsFeedback/>
        <OurTeamMember/>
        <CustomTheams
        text={
          <>
          Scale Your Buisness Online Get a <span className="text-gray-400 italic font-extrabold">Free Consultation From our Experts...</span>
          </>
        }
      />
        <Contact/>
        <FAQS/>
    </div>
  )
}

export default Home