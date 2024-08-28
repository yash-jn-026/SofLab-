import React from 'react'
import bgbackground from "../assets/29699682_7566583.jpg"
import Navbar from './navbar'
import HeroSectionLeft from './heroSectionLeft'
import HeroSectionRight from './HeroSectionRight'
import HerosectionBottom from './herosectionBottom'
import OtherBottom from './OtherBottom'


function Herosection() {
  return (
    <div className='relative h-fit px-2'>
        <div className='absolute inset-0 z-0 bg-[#e056fd] bg-gradient-to-br from-[#e056fd] to-[#000000]'>
        ;
        
        </div> 
         {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-20 flex flex-row">
        <HeroSectionLeft className="flex-col" />
        <HeroSectionRight className="flex-col" />
       
      </div>

    <div className="relative z-20" >
      <OtherBottom />
    </div>
     

    </div>
  )
}

export default Herosection