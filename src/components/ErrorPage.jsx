import React from 'react'
import errorIcon from "../assets/rocket-icon.png"
import { Link } from 'react-router'
const ErrorPage = ({message="Page not found", code=404}) => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto text-center min-h-screen space-y-5'>
      <img src={errorIcon} alt="Error Icon" />
      <h1 className='text-4xl font-bold text-gray-700'>{message}</h1>
      <p className='text-[#21272a] md:2/5 w-full mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, numquam voluptates ullam consequuntur culpa a odit necessitatibus deleniti deserunt possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates molestias labore ad doloremque eos vitae laudantium perferendis totam fugit..</p>
      <Link to="/" className='mt-6 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-700 transition'>Go to Home</Link>
    </div>
  )
}

export default ErrorPage