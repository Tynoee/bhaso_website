import React from "react";
import { Button } from "@relume_io/relume-ui";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactUs() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header with BHASO Background Image */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
        <div className="relative text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect With BHASO</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Reach out to learn more about our HIV resilience, climate justice, and gender equality programs across Zimbabwe.
          </p>
        </div>
      </section>

      {/* Contact Cards - BHASO Information */}
      <section className="py-16 px-[5%] max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-green-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FiPhone className="text-green-800 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-green-900">Phone</h3>
          <p className="text-gray-700">+263 242 123 456</p>
          <p className="text-gray-700">+263 772 987 654 (Mobile)</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FiMail className="text-green-800 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-green-900">Email</h3>
          <p className="text-gray-700">info@bhaso.org</p>
          <p className="text-gray-700">volunteer@bhaso.org</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FiMapPin className="text-green-800 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-green-900">Headquarters</h3>
          <p className="text-gray-700">12 Batanai Avenue</p>
          <p className="text-gray-700">Harare, Zimbabwe</p>
        </div>
      </section>

      {/* Visit Our Offices - BHASO Specific */}
      <section className="py-16 px-[5%] max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-900">Visit Our Provincial Offices</h2>
          <p className="mb-6 text-lg text-gray-700">
            BHASO operates in four provinces across Zimbabwe. Our teams are available to discuss partnership opportunities, 
            volunteer programs, or community collaborations.
          </p>
          <div className="space-y-4 mb-8">
            <p className="font-medium text-green-800">Masvingo Office</p>
            <p className="text-gray-700">45 Justice Street, Masvingo</p>
            
            <p className="font-medium text-green-800">Matabeleland South Office</p>
            <p className="text-gray-700">23 Resilience Road, Gwanda</p>
            
            <p className="font-medium text-green-800">Manicaland Office</p>
            <p className="text-gray-700">78 Equality Lane, Mutare</p>
            
            <p className="font-medium text-green-800">Midlands Office</p>
            <p className="text-gray-700">12 Health Avenue, Gweru</p>
          </div>
          <Button className="bg-green-800 hover:bg-green-700 text-white">
            Get Directions
          </Button>
        </div>
        
        <div className="bg-green-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FiClock className="text-green-800 text-2xl mr-3" />
            <h3 className="text-xl font-semibold text-green-900">Operating Hours</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p><span className="font-medium">Weekdays:</span> 8:00 AM - 5:00 PM</p>
            <p><span className="font-medium">Saturdays:</span> 9:00 AM - 1:00 PM</p>
            <p><span className="font-medium">Sundays:</span> Closed</p>
            <p className="pt-4 text-sm">*Emergency health services available 24/7 for program participants</p>
          </div>
        </div>
      </section>

      {/* Program Inquiries */}
      <section className="py-16 px-[5%] max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-900">Program-Specific Inquiries</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
            <ul className="space-y-6">
              <li>
                <h4 className="font-medium text-green-800 border-b pb-2">How can I volunteer with BHASO's health programs?</h4>
                <p className="mt-2 text-gray-700">We train community health volunteers quarterly. Contact our HR department for upcoming training dates.</p>
              </li>
              <li>
                <h4 className="font-medium text-green-800 border-b pb-2">What items can I donate to support your work?</h4>
                <p className="mt-2 text-gray-700">We accept medical supplies, farming tools, and educational materials. View our current needs list.</p>
              </li>
              <li>
                <h4 className="font-medium text-green-800 border-b pb-2">How does BHASO ensure donor accountability?</h4>
                <p className="mt-2 text-gray-700">We publish annual reports and are audited by KPMG Zimbabwe. Request our financial statements.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Ask About Our Programs</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Program Interest</label>
                <select className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800">
                  <option>HIV/TB Management</option>
                  <option>Climate Smart Agriculture</option>
                  <option>Gender Equality Programs</option>
                  <option>Youth Empowerment</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                ></textarea>
              </div>
              <Button className="bg-green-800 hover:bg-green-700 text-white w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA - Aligned with Strategic Plan */}
      <section className="bg-white text-green-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-[5%]">
          <h2 className="text-3xl font-bold mb-6">Partner With BHASO</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating HIV-resilient, climate-smart communities across Zimbabwe by 2027.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-green-900 hover:bg-gray-100">
              Become a Partner
            </Button>
            <Button variant="secondary" className="border border-white text-green-900 hover:bg-green-800">
              Download Strategic Plan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}