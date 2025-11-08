import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import bannerImage from '../../assets/banner.png';
import { FaRegCirclePlay } from 'react-icons/fa6';
const Banner = () => {

  const [showModel, setShowModel] = useState(false)

  const openModel = () => setShowModel(true);
  const closeModel = () => setShowModel(false);

  return (
    <div className='bg-[#f2f4f8]'>
      <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row items-center justify-between'>
        {/* left side */}
        <div className='lg:w-1/2 text-center lg:text-left '>
          <h1 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-800  '>Build Your <span className='text-[#0f62fe]'>Dream</span> Website <br /> With Us</h1>
          <p className='text-lg text-gray-600 mb-6'>Join thousands of business already growing with our solutions. Let's help you take your business to the next level</p>
          <div className='flex flex-col md:flex-row justify-center lg:justify-start gap-4'>
            <button className='bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition'><span>Get Started</span> <FaLongArrowAltRight /> </button>
            <button className='border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition text-blue-600'>Contact Us</button>
          </div>
        </div>
        {/* right side */}
        <div className='lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative'>
          <div className='relative group '>
            <img src={bannerImage} alt="banner-img" className='rounded-lg shadow-lg' />
            <button onClick={openModel} className='absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacitty-75 z-0 transition'>
              <FaRegCirclePlay className='text-white text-5xl hover:text-blue-600' />
            </button>
          </div>
        </div>

        {/* model */}
        {
          showModel && (<div className='fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-m z-50'>
            <div className='bg-white rounded-lg p-5 shadow-lg relative max-w-xl w-full'>
              <button className='absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded-full' onClick={closeModel}>&times;</button>
              <iframe className='w-full aspect-video' width="560" height="315" src="https://www.youtube.com/embed/0yw_4-3L_lA?si=e2FQGGspLKjAUv7-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Banner