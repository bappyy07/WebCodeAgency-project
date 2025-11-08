import React from 'react'
import Banner from './Banner.jsx'
import Tools from './Tools.jsx'
import CompanyLogos from './CompanyLogos.jsx'
import Services from './Services.jsx'
import Testimonials from './Testimonials.jsx'
import Blogs from '../blogs/Blogs.jsx'
import TeamSection from './TeamSection.jsx'
import Pricing from './Pricing.jsx'
import Faqs from './Faqs.jsx'
import NewsLetter from './NewsLetter.jsx'
const Home = () => {
  return (
    <>
      <Banner />
      <Tools />
      <CompanyLogos />
      <Services />
      <Testimonials />
      <Blogs />
      <TeamSection />
      <Pricing />
      <Faqs />
      <NewsLetter />
    </>
  )
}

export default Home