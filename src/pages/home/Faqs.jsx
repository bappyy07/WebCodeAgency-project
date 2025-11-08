import React from 'react'
import Heading from '../../components/Heading.jsx'

const faqs = [
  {
    id: 1,
    question: "Who should use the app?",
    answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
  },
  {
    id: 2,
    question: "What is included with my subscription?",
    answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
  },
  {
    id: 3,
    question: "How do I get paid?",
    answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
  },
  {
    id: 4,
    question: "Is my personal information safe?",
    answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
  },
  {
    id: 5,
    question: "How can we get in touch?",
    answer: "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have."
  }
];
const Faqs = () => {

  const [expandedFaq, setExpandedFaq] = React.useState(null);

  // Function to toggle FAQ expansion
  const toggleFaq = (id) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  }
  return (
    <div className='bg-[#f2f4f8]'>
      <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        <Heading subheading={"FAQs"} heading={"Frequently Asked Questions"} />

        {/* FAQ accordions go here */}

        <div className='w-full max-w-4xl mx-auto'>

          {
            faqs.map((faq) => (
              <div key={faq.id} className='border border-gray-300 mb-4'>
                <div onClick={() => toggleFaq(faq.id)} className='cursor-pointer flex justify-between items-center p-4 bg-white hover:bg-gray-100 transition duration-200'>
                  <h2 className='text-lg font-bold text-gray-800'>{faq.question}</h2>
                  <span className={`font-bold transform transition duration-200 text-lg cursor-pointer ${expandedFaq === faq.id ? "rotate-180" : ""}`}>{expandedFaq === faq.id ? "-" : "+"}</span>
                </div>

                {/* answers */}
                {
                  expandedFaq === faq.id && (
                    <div className='p-4 bg-gray-50 '>
                      <p className='text-gray-700'> {faq.answer}</p>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Faqs