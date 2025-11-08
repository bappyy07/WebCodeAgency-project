import React from 'react'
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
import Heading from '../../components/Heading.jsx';
const tools = [
  {
    icon: FiSettings,
    title: "Customizable Settings",
    description: "Easily adjust preferences to suit your workflow and enhance productivity."
  },
  {
    icon: FiCode,
    title: "Developer Friendly",
    description: "Easily configure tools to fit your project requirements."
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description: "Easily configure tools to fit your project requirements."
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description: "Easily configure tools to fit your project requirements."
  },
]

const Tools = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5 '>
      {/* heading */}
      {/* <div className='text-center mb-10'>
        <p className='text-blue-600 font-semibold uppercase'>The tools you need</p>
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 mt-3'>All-in-one Solution for Your Projects</h2>
      </div> */}
      <Heading heading="All-in-one Solution for Your Projects" subheading="The tools you need" />

      {/* render tools card */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16'>
        {
          tools.map((tool, ind) => (
            <div key={ind} className='flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer'>
              <tool.icon className='text-blue-600 text-4xl mb-4' />
              <h3 className='text-lg font-bold text-gray-800 mb-2'>{tool.title}</h3>
              <p className='text-gray-600 mt-2'>{tool.description}</p>
            </div>
          ))
        }
      </div>

      {/* button */}
      <div className='text-center'>
        <button className='bg-blue-600 text-white px-6 py-3 rounded-md  hover:bg-blue-700 transition'>Explore More </button>
      </div>

    </div>
  )
}

export default Tools