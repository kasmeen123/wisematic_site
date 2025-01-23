'use client'
import React, { useState } from "react";
import { FaCalendar, FaBriefcase, FaClock, FaHome } from "react-icons/fa";
import Header from "../_components/landing-header";

const JobApplication = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
        <Header/>
    <div className="flex justify-between p-20 pl-40 bg-[#F7FFFA] ">
      {/* Job Description Section */}
      <div className="w-1/2">
        <h1 className="text-3xl text-gray-800 mb-4">Sr. Business Analyst</h1>
        <p className="flex items-center text-gray-500">
          <FaBriefcase className="mr-2" />
          <strong className="mr-2">Job Category:</strong> Business Analyst
        </p>
        
        <p className="flex items-center text-gray-500">
          <FaClock className="mr-2" />
          <strong className="mr-2">Job Type:</strong> Full Time
        </p>
        
        <p className="flex items-center text-gray-500">
          <FaHome className="mr-2" />
          <strong className="mr-2">Job Location:</strong> Hybrid
        </p>
        
        <p className="flex items-center text-gray-500">
          <FaCalendar className="mr-2" />
          <strong className="mr-2">Experience level:</strong> Senior
        </p>

        <hr className="my-4 border-t-2 border-gray-500" />
        <h2 className="text-lg font-semibold mt-4 text-gray-500">Position Overview:</h2>
        <p className="text-lg text-gray-500" >Wisematic Inc., a leading IT consultation services company in Canada, is seeking a highly experienced and strategic Senior Business Analyst to drive the development and implementation of our innovative Learning Management System (LMS) and other IT solutions. As a senior member of our team, you will play a critical role in shaping business strategies, aligning technical solutions with organizational goals, and mentoring junior analysts. The ideal candidate has a strong background in business analysis, leadership skills, and a track record of delivering successful IT projects.</p>

        <h3 className="text-lg font-semibold mt-4 text-gray-500">Key Responsibilities:</h3>
        <p className="text-2xl font-semibold mt-4 text-gray-700">Strategic Business Analysis</p> 
        <ul className="list-disc pl-6">
          <li className="text-lg mt-4 text-gray-500">Partner with senior leadership and key stakeholders to define business objectives, project scope, and strategic priorities.</li>
          <li className="text-lg text-gray-500">Conduct high-level analysis to identify business challenges and recommend scalable, efficient solutions aligned with company goals.</li>
          <li className="text-lg text-gray-500">Lead the development of business cases and feasibility studies to support project approval and funding.</li>
        </ul>

        <p className="text-2xl font-semibold mt-4 text-gray-700">Advanced Requirement Gathering and Analysis:</p> 
        <ul className="list-disc pl-10">
          <li className="text-lg mt-4 text-gray-500">Facilitate discovery sessions with stakeholders to elicit detailed business and technical requirements.</li>
          <li className="text-lg text-gray-500">Develop comprehensive documentation, including Business Requirement Documents (BRDs), Functional Requirement Specifications (FRS), and Epics/User Stories. </li>
          <li className="text-lg text-gray-500">Ensure alignment of requirements with organizational objectives and technical feasibility.</li>
        </ul>

        <p className="text-2xl font-semibold mt-4 text-gray-700">Process Improvement and Optimization:</p> 
        <ul className="list-disc pl-10">
          <li className="text-lg mt-4 text-gray-500">Map complex business processes using advanced tools like Signavio, Bizagi, or Blueworks Live.</li>
          <li className="text-lg text-gray-500">Identify inefficiencies, risks, and opportunities for improvement in current workflows and recommend best practices for optimization.</li>
          <li className="text-lg text-gray-500">Lead cross-functional workshops to implement process changes and ensure adoption.</li>
        </ul>

        <p className="text-2xl font-semibold mt-4 text-gray-700">Leadership and Mentorship:</p> 
        <ul className="list-disc pl-10">
          <li className="text-lg mt-4 text-gray-500">Mentor and guide junior business analysts, providing training, feedback, and support in delivering high-quality work.</li>
          <li className="text-lg text-gray-500">Act as a subject matter expert (SME) in business analysis methodologies and tools, driving standardization and best practices within the team.</li>
        </ul>

        <p className="text-2xl font-semibold mt-4 text-gray-700">Stakeholder Management and Communication:</p> 
        <ul className="list-disc pl-10">
          <li className="text-lg mt-4 text-gray-500">Collaborate with executive stakeholders, technical teams, and end-users to ensure alignment and clarity throughout the project lifecycle.          </li>
          <li className="text-lg text-gray-500">Translate complex business needs into actionable technical requirements for developers and QA teams.          </li>
          <li className="text-lg text-gray-500">Deliver presentations, reports, and recommendations to senior management and project sponsors.</li>
        </ul>

        <p className="text-2xl font-semibold mt-4 text-gray-700">Project Delivery and Support:</p> 
        <ul className="list-disc pl-10">
          <li className="text-lg mt-4 text-gray-500">Oversee multiple concurrent projects, ensuring timely delivery, scope compliance, and high-quality results.</li>
          <li className="text-lg text-gray-500">Support system testing, user acceptance testing (UAT), and go-live activities to confirm solutions meet business needs.</li>
          <li className="text-lg text-gray-500">Serve as the primary point of contact for resolving escalated issues and managing project risks.
          </li>
        </ul>

        <p className="text-2xl font-semibold mt-4 text-gray-700">Data-Driven Insights and Reporting:</p> 
        <ul className="list-disc pl-10">
          <li className="text-lg mt-4 text-gray-500">Leverage tools like Power BI, Tableau, or Excel for data analysis and visualization to support decision-making.
          </li>
          <li className="text-lg text-gray-500">Track and report on project KPIs, providing actionable insights for continuous improvement.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-500 mt-4">Qualifications:</h3>
        <p className="text-2xl font-semibold mt-4 text-gray-700">Experience and Skills:</p> 
        <ul className="list-disc pl-10">
          <li className="text-lg text-gray-500" >Bachelor’s degree in Business Administration, Computer Science, or a related field (Master’s degree preferred)</li>
          <li className="text-lg text-gray-500" >7+ years of experience in business analysis, with a minimum of 3 years in a senior or leadership role</li>
          <li className="text-lg text-gray-500" >Expertise in business analysis tools such as Jira, Confluence, Lucidchart, or Microsoft Visio</li>
          <li className="text-lg text-gray-500" >Proficiency in Agile and Waterfall project management methodologies</li>
          <li className="text-lg text-gray-500" >Strong knowledge of SaaS platforms, particularly in EdTech or LMS solutions</li>
          <li className="text-lg text-gray-500" >Advanced analytical and problem-solving skills, with the ability to think strategically</li>
        </ul>

        <h3 className="text-lg text-gray-500 font-semibold mt-4">What We Offer:</h3>
        <ul className="list-disc pl-6">
          <li className="text-lg text-gray-500" >Competitive salary and comprehensive benefits package</li>
          <li className="text-lg text-gray-500" >Leadership opportunities in a fast-growing organization</li>
          <li className="text-lg text-gray-500" >A collaborative and innovative work environment focused on professional growth</li>
          <li className="text-lg text-gray-500" >Access to ongoing training, certifications, and career development programs</li>
          <li className="text-lg text-gray-500" >Flexible work arrangements to support work-life balance</li>
        </ul>
      </div>

      {/* Application Form Section */}
      
      <div className="flex flex-col w-1/2 bg-gray-100 ml-20 p-10 pr-40  rounded-lg shadow-md max-h-[800px] overflow-y-auto">
        <h2 className="text-2xl text-gray-700 font-semibold ">Apply for this position</h2>
        <form method="POST">
          <label htmlFor="full-name" className="block font-semibold mb-2 mt-6 text-gray-500">Full Name *</label>
          <input type="text" id="full-name" name="full-name" required className="w-full p-2 mb-4 border border-gray-300 rounded" />

          <label htmlFor="email" className="block font-semibold mb-2 text-gray-500">Email *</label>
          <input type="email" id="email" name="email" required className="w-full p-2 mb-4 border border-gray-300 rounded" />

          <label htmlFor="phone" className="block font-semibold mb-2 text-gray-500">Phone *</label>
          <input type="tel" id="phone" name="phone" required className="w-full p-2 mb-4 border border-gray-300 rounded" />

          <label htmlFor="cover-letter" className="block font-semibold mb-2 text-gray-500">Cover Letter *</label>
          <textarea id="cover-letter" name="cover-letter" rows="4" required className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>

          <label htmlFor="cv-upload" className="block font-semibold mb-2 text-gray-500">Upload CV/Resume *</label>
          <input type="file" id="cv-upload" name="cv-upload" accept=".pdf,.doc" onChange={handleFileChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
          {file && <p className="mt-2 text-black">{file.name}</p>}

          <div className="flex items-center mb-4">
            <input type="checkbox" id="data-agreement" name="data-agreement" required className="mr-2" />
            <label htmlFor="data-agreement" className="text-sm text-gray-500">By using this form you agree with the storage and handling of your data by this website.</label>
          </div>
          <div className="flex justify-center ml-40">
          <button type="submit" className="bg-gradient-to-r from-[#28C5AD] to-[#584BF4] hover:from-[#584BF4] hover:to-[#28C5AD] text-white py-4 px-10 rounded-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default JobApplication;