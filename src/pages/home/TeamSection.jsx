import React from 'react'
import Heading from '../../components/Heading.jsx'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router';
const teamMembers = [
    {
        id: 1,
        image: "/images/members/person1.png",
        name: "John Doe",
        role: "CEO",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
    },
    {
        id: 2,
        image: "/images/members/person2.png",
        name: "Jane Smith",
        role: "CTO",
        linkedIn: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
    },
    {
        id: 3,
        image: "/images/members/person3.png",
        name: "Mark Johnson",
        role: "Designer",
        linkedIn: "https://linkedin.com/in/markjohnson",
        twitter: "https://twitter.com/markjohnson",
        instagram: "https://instagram.com/markjohnson",
        facebook: "https://facebook.com/markjohnson",
    },
    {
        id: 4,
        image: "/images/members/person4.png",
        name: "Emily Carter",
        role: "Developer",
        linkedIn: "https://linkedin.com/in/emilycarter",
        twitter: "https://twitter.com/emilycarter",
        instagram: "https://instagram.com/emilycarter",
        facebook: "https://facebook.com/emilycarter",
    },
];


const TeamSection = () => {
  return (
    <div className='bg-[#f2f4f8]'>
      <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        <Heading subheading={"Meet Our Team"} heading={"The Professional Team Behind Our Success"}/>

      {/* Team Members */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {
            teamMembers.map((mem,ind)=>(
             <div key={ind} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <img src={mem.image} alt={mem.name} className="w-full h-56 mx-auto mb-4 object-cover" />

                {/* content */}

                <div className='p-5'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>{mem.name}</h3>
                  <p className='text-sm text-gray-500 mb-4'>{mem.role}</p>

                  {/* social icon  */}
                  <div className='flex space-x-4 mb-5 items-center'>
                    <Link to={mem.linkedIn}><FaLinkedinIn className="text-blue-500 hover:text-blue-800"/></Link>
                    <Link to={mem.twitter}><FaTwitter className="text-blue-500 hover:text-blue-800"/></Link>
                    <Link to={mem.instagram}><FaInstagram className="text-blue-500 hover:text-blue-800"/></Link>
                    <Link to={mem.facebook}><FaFacebookF className="text-blue-500 hover:text-blue-800"/></Link>
                  </div>

                  {/* contact button */}
                  <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300'>Contact {mem.name.split(" ")[0]}</button>


                </div>

             </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default TeamSection
