
"use client";
import Header from "../_components/landing-header";
import { FaCheck, FaCogs, FaTasks, FaChartLine, FaRobot, FaMap, FaRoute  } from 'react-icons/fa';
import Footer from "../_components/footer";

const TechConsultationPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      <section className="px-40 pt-40 pb-20 ">
        <h1 className="text-white text-4xl font-bold mb-6">
         Tech. Consultation
         <div className="text-white text-sm flex items-center mt-4">
         <a href="/" >
      Home
    </a>
    <span className="mx-4">&gt;</span>
    <span>Services</span>
    <span className="mx-4">&gt;</span>
    <span>Tech Consultation</span>
  </div>
        </h1>
      </section>

      <div className="bg-[#F7FFFA]">
        <section className="py-20 px-8 text-white text-center">
          <h1 className="text-3xl text-gray-800 font-bold mb-8"
           style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
            Unleash Your Business Potential: Wisematic Technology Consultion
          </h1>
        </section>

        {/* Content Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between py-5 px-20">
          {/* Image Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <img
              src="/techConsult.jpeg" // Replace with your image path
              alt="Tech Consultation"
              className="w-[500px] ml-12 rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-left -pl-20 pr-20">
            <h2 className="text-2xl text-[#28C5AD] font-semibold -mt-5 mb-4">Tech Consultation</h2>
            <p className="text-3xl text-gray-700 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              We provide business solutions tailored to your needs.
            </p>
            <p className="text-lg text-gray-500 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              In today’s dynamic technological landscape, navigating the right solutions can be a daunting task. At Wisematic, we bridge that gap, transforming technology into a strategic advantage for your business.
            </p>
            <p className="text-lg text-gray-500 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              Our expert technology consultants are more than just advisors; they’re your innovation architects. We take a collaborative approach, delving deep into your unique needs and goals.
            </p>
            <p className="text-lg text-gray-500 mb-4"
             style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              Here’s what sets Wisematic’s technology consultation apart:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-lg font-bold">Holistic Vision</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-lg font-bold">Future-Proof Strategies</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-lg font-bold">Agile Implementation</span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#28C5AD] rounded-full mr-3">
                  <FaCheck className="text-white text-xl" />
                </div>
                <span className="text-[#28C5AD] text-lg font-bold">Tailored Recommendations</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Cards Section */}
        <section className="py-20 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{paddingLeft: '100px', paddingRight: '100px'}}>
            {/* Card 1: Program and Project Management */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaTasks className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Program and Project Management</h3>
              <p className="textbase text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Our seasoned project managers blend business acumen with technical expertise. We tailor our approach to your project, whether it’s waterfall, agile, or a hybrid model. Our focus on planning, execution, and stakeholder satisfaction ensures successful delivery every time.</p>
            </div>

            {/* Card 2: Business Requirements Elicitation and Analysis */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaChartLine className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Business Requirements Elicitation and Analysis</h3>
              <p className="text-base text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>We collaborate closely with you to define your project’s success. Our analysts combine design thinking with proven techniques to deeply understand your business objectives and translate them into clear, actionable requirements. </p>
            </div>

            {/* Card 3: Business Process Automation */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaRobot className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Business Process Automation</h3>
              <p className="text-base text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>We help our clients to build faster, leaner, and more digitized businesses with automated business workflows. Our teams define the implementation strategy, transition plan, and the new governance structure.</p>
            </div>

            {/* Card 4: Technology Integration Strategy */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
                <FaCogs className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Technology Integration Strategy</h3>
              <p className="text-base text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Our expert Solution Architect will first understand our clients’ objectives, review their environments, system capabilities, and technology components, and then map out an integration strategy that defines efficient interfaces and connection protocols among in-scope systems.</p>
            </div>
            
            {/* Rodmap Card */}
            
            <div className="bg-white rounded-lg  p-8 text-center col-span-2 mt-20 border-2 shadow-[0px_4px_8px_rgba(40,197,173,0.2)]">
  <div className="flex items-center justify-center w-[75px] h-[75px] mb-4 mx-auto bg-gradient-to-r from-[#28C5AD] to-[#584BF4] rounded-full">
    <FaRoute className="text-4xl text-white" />
  </div>
  
  <h3 className="text-2xl text-[#28C5AD] font-semibold mb-4"
  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Strategy, Architecture, and Roadmap</h3>
  <p className="text-lg text-gray-700 mb-4"
  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}> 

We partner with you to build a technology landscape that propels your business forward.
At Wisematic, we understand that technology is more than just tools; it’s a strategic asset. Our expert consultants collaborate closely with your team to assess your current IT environment, identify opportunities, and develop a clear roadmap to achieve your business goals.

We analyze your existing IT infrastructure, processes, and capabilities to identify strengths, weaknesses, and potential gaps.
We develop a comprehensive technology strategy aligned with your business objectives, ensuring your IT investments deliver maximum ROI.</p>
</div>

          </div>
          
        </section>
        <div className="bg-[#F7FFFA] py-20 px-8">
  <h2 className="text-3xl font-serif italic  bg-gradient-to-r from-[#584BF4] to-[#28C5AD] bg-clip-text text-transparent leading-tight mb-6 text-center">Enquire Now</h2>
  <p className="text-4xl font-bold text-[#28C5AD] mb-10 text-center"
  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Tell us your requirements</p>

  <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* First Name */}
      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-gray-700 font-semibold mb-2">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none text-black focus:ring-2 focus:ring-[#28C5AD]"
          required
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-gray-700 font-semibold mb-2">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 text-black focus:ring-[#28C5AD]"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Id"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 text-black focus:ring-[#28C5AD]"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="phone" className="text-gray-700 font-semibold mb-2">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 text-black focus:ring-[#28C5AD]"
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="message" className="text-gray-700 font-semibold mb-2">Your Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 text-black focus:ring-[#28C5AD]"
          rows="4"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center sm:col-span-2">
        <button
          type="submit"
          className="px-10 py-4 bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:bg-gradient-to-r hover:from-[#584BF4] hover:to-[#28C5AD] text-white rounded-full shadow-md transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</div>
      </div>
<Footer/> 
    </div>
  );
};

export default TechConsultationPage;