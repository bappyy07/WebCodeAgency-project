import React from 'react'
import Heading from '../../components/Heading'

const blogs = [
  {
    id: 1,
    image: "./images/blogs/blog1.png",
    category: "Technology",
    title: "How AI is Shaping the Future of Web Development",
    description:
      "Discover how artificial intelligence is transforming the way we build and design websites.",
    authorImage: "/images/authors/author1.png",
    authorName: "John Doe",
    authorRole: "Tech Blogger",
  },
  {
    id: 2,
    image: "./images/blogs/blog2.png",
    category: "Design",
    title: "10 Tips for Creating Stunning UI/UX Designs",
    description:
      "Learn the secrets to designing user interfaces that captivate and convert users.",
    authorImage: "/images/authors/author2.png",
    authorName: "Jane Smith",
    authorRole: "UX Designer",
  },
  {
    id: 3,
    image: "./images/blogs/blog3.png",
    category: "Development",
    title: "Understanding JavaScript Closures in Depth",
    description:
      "A comprehensive guide to one of the most powerful concepts in JavaScript.",
    authorImage: "/images/authors/author3.png",
    authorName: "Mark Johnson",
    authorRole: "Frontend Developer",
  },
  {
    id: 4,
    image: "./images/blogs/blog4.png",
    category: "Business",
    title: "Why Digital Transformation is Essential for Success",
    description:
      "Explore how businesses can thrive by adopting digital transformation strategies.",
    authorImage: "/images/authors/author4.png",
    authorName: "Emily Carter",
    authorRole: "Business Analyst",
  },
];

const Blogs = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
      <Heading heading="Latest Articles and Insights." subheading="Our Bogs" description="" />

      {/* blogs card */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {
          blogs.map((blog, ind) => (
            <div key={blog.id} className=" bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
              <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover hover:scale-105 transition-transform duration-300'/>

              {/* blog content */}
              <div className='p-5'>
                <p className='text-blur-600 text-sm font-medium uppercase mb-2'>{blog.category}</p>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>{blog.title}</h3>
                <p className='text-gray-600 text-sm mb-4'>{blog.description}</p>

                {/* author info */}
                <div  className='flex items-center space-x-3 '>
                  <img src={blog.authorImage} alt={blog.authorName} className='w-10 h-10 rounded-full object-center' />

                  <div>
                    <h4 className='text-gray-700 text-xl font-bold'>{blog.authorName}</h4>
                    <p className='text-gray-500 text-xs font-bold'>{blog.authorRole}</p>

                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Blogs