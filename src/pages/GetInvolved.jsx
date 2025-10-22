import React, { useState } from "react";

import { FiMail, FiPhone, FiMapPin, FiClock, FiUser, FiCalendar, FiAward } from "react-icons/fi";

export default function GetInvolved() {
  const volunteerPrograms = [
    {
      title: "Community Health Educator",
      description: "Provide HIV prevention education and promote testing in rural communities. Volunteers will receive training on our evidence-based curriculum and work alongside our health teams.",
      skills: ["Public speaking", "Health education", "Community engagement"],
      image: "https://images.pexels.com/photos/5726709/pexels-photo-5726709.jpeg",
      commitment: "6+ months preferred",
      locations: ["Masvingo", "Matabeleland South", "Manicaland"]
    },
    {
      title: "Agriculture Field Trainer",
      description: "Teach climate-smart farming techniques to smallholder farmers. Share your expertise in sustainable agriculture while learning traditional Zimbabwean farming methods.",
      skills: ["Agriculture", "Training", "Climate resilience"],
      image: "https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg",
      commitment: "Seasonal (3-6 months)",
      locations: ["Midlands", "Masvingo"]
    },
    {
      title: "Youth Mentor",
      description: "Mentor adolescent girls and young women in life skills and HIV prevention. Help empower the next generation through our DREAMS program for AGYW (Adolescent Girls and Young Women).",
      skills: ["Mentoring", "Youth development", "Gender issues"],
      image: "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg",
      commitment: "Weekly sessions",
      locations: ["All provinces"]
    }
  ];

  const [selectedProgram, setSelectedProgram] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    availability: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <img
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
          alt="BHASO community health workers"
          className="object-cover w-full h-full absolute inset-0 z-0"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Movement</h1>
          <p className="text-xl mb-8">
            Whether you have time, resources, or skills to share, there are many ways to support
            BHASO's mission to create healthier, more resilient communities in Zimbabwe.
          </p>
        
        </div>
      </section>

      {/* Volunteer Programs Section */}
      <section id="volunteer" className="py-16 px-[5%] max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-green-900">Volunteer With BHASO</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Join our team of dedicated volunteers helping to deliver programs across Zimbabwe's most vulnerable communities.
          </p>
        </div>

        {/* Alternating Program Cards */}
        {volunteerPrograms.map((program, index) => (
          <div 
            key={index} 
            className={`mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
          >
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-900">{program.title}</h3>
              <p className="text-gray-700 mb-6">{program.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 flex items-center">
                  <FiUser className="mr-2 text-green-700" /> Required Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill, i) => (
                    <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-1 flex items-center">
                    <FiCalendar className="mr-2 text-green-700" /> Time Commitment:
                  </h4>
                  <p>{program.commitment}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 flex items-center">
                    <FiMapPin className="mr-2 text-green-700" /> Locations:
                  </h4>
                  <p>{program.locations.join(", ")}</p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedProgram(program.title)}
                className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white rounded-lg font-medium"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}

        {/* Volunteer Application Form */}
        <div className="bg-green-50 rounded-xl p-8 md:p-12 mt-16">
          <h3 className="text-2xl font-bold mb-6 text-green-900">
            {selectedProgram ? `Apply for ${selectedProgram}` : "Volunteer Application"}
          </h3>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Program Interest*</label>
              <select
                name="program"
                value={selectedProgram || formData.program}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              >
                <option value="">Select a program</option>
                {volunteerPrograms.map((program, i) => (
                  <option key={i} value={program.title}>{program.title}</option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Relevant Experience*</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows="3"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Availability*</label>
              <textarea
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                rows="2"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white rounded-lg font-medium"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 px-[5%] bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-green-900">Support Our Work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Your financial contribution helps us expand our programs and reach more communities in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <FiAward className="text-green-800 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">One-Time Donation</h3>
              <p className="text-gray-600 mb-4">
                Make an immediate impact with a single contribution to our programs.
              </p>
              <button className="px-4 py-2 bg-green-800 hover:bg-green-700 text-white rounded-lg transition">
                Donate Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <FiCalendar className="text-green-800 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Monthly Giving</h3>
              <p className="text-gray-600 mb-4">
                Provide sustained support with automatic monthly donations.
              </p>
              <button className="px-4 py-2 bg-green-800 hover:bg-green-700 text-white rounded-lg transition">
                Become a Sustainer
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <FiMail className="text-green-800 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Other Ways to Give</h3>
              <p className="text-gray-600 mb-4">
                Corporate matching, in-kind donations, or legacy giving.
              </p>
              <button className="px-4 py-2 bg-green-800 hover:bg-green-700 text-white rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-16 px-[5%] max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-900">Partner With BHASO</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
            We collaborate with organizations, institutions, and businesses to maximize our impact.
          </p>
          <button className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white rounded-lg font-medium transition">
            Contact Our Partnerships Team
          </button>
        </div>
      </section>
    </div>
  );
}
