import React from 'react'
import Heading from '../../components/Heading.jsx';
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook } from "react-icons/fa";

const CompanyLogos = () => {
  const logos = [
    {icon: FaApple, name: "FaApple"},
    {icon: FaGoogle, name: "FaGoogle"},
    {icon: FaMicrosoft, name: "FaMicrosoft"},
    {icon: FaAmazon, name: "FaAmazon"},
    {icon: FaFacebook, name: "FaFacebook"},
  ]
  return (
    <div className='bg-[#f2f4f8]'>
      <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        <Heading heading="Our trusted partners" subheading="Companies we have worked with" description="We have paetnered with some of the most inovative and leading companies to bring the best solutions to you"/>

        {/* logo container */}
        <div className='relative overflow-hidden  border-b-[1px] p-8'>
          <div className='flex items-center justify-around md:space-x-14 space-x-8 animate-scroll '>
            {
              logos.map((logo,ind)=>(
                <div key={ind} className='flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transition transform'>
                  <logo.icon className='text-blue-500 text-4xl' title={logo.name}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogos