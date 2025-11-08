import React from 'react'
import Heading from '../../components/Heading.jsx'
import { FaLongArrowAltRight } from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5 text-center'>
      <Heading heading={"Stay updated with Our Newsletter"} description={"Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."} />

      <div className='flex flex-col sm:flex-row justify-center gap-4 items-center'>
        <button className='bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition'><span>Subscribe Now</span> <FaLongArrowAltRight /> </button>
        <button className='border border-blue-600 px-9 md:px-6  py-3 rounded-md hover:bg-blue-700 hover:text-white transition text-blue-600'>Learn More</button>
      </div>

    </div>
  )
}

export default NewsLetter