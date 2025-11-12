import React from "react";
import img1 from "../../assets/img/img1.jpg.jpg";
import img2 from "../../assets/img/img2.jpg.jpg";
import img3 from "../../assets/img/daffodil.jpg.jpeg";
// Import your images or use placeholder services like 'unsplash' or 'picsum'

const EducationFlatform = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Content Block */}
        <div className="space-y-8">
          {/* Logo/Header */}
          <div className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Who We Are
            </h2>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            We Are
            <span className="text-indigo-600 border-b-4 border-indigo-600">
              Largest
            </span>
            Education Platform
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          {/* Checklist */}
          <ul className="mt-6 space-y-4">
            <ChecklistItem text="Emergency response time is one hour or less guaranteed." />
            <ChecklistItem text="We want you to be completely satisfied with our services." />
            <ChecklistItem text="You deserve to have your questions answered in plain English." />
            <ChecklistItem text="Our service philosophy is proactive, not reactive." />
            <ChecklistItem text="We hire only seasoned, professional technicians with at least 5-10 years experience and usually many more." />
          </ul>

          {/* Buttons and Contact */}
          <div className="mt-16 flex items-center space-x-6">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Learn More
            </button>
            <span className="text-gray-500 font-medium">OR</span>
            <div className="text-base text-gray-700">
              Call Us on{" "}
              <span className="font-semibold text-indigo-600">
                +880 18631-84444
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Grid Block */}
        <div className="mt-10 lg:mt-0">
          {/* Using CSS Grid for the custom image layout */}
          <div className="grid grid-cols-2 grid-rows-3 gap-6 h-full">
            {/* Top Left Image */}
            <div className="row-span-1 col-span-1 rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={img1}
                alt="Smiling student with backpack"
              />
            </div>

            {/* Top Right Image - The tall one */}
            <div className="row-span-2 col-span-1 rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={img2}
                alt="College campus building"
              />
            </div>

            {/* Bottom Wide Image */}
            <div className="row-span-2 col-span-2 rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={img3}
                alt="Students studying in classroom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Horizontal Rule for separation --- */}

      {/* Bottom Stats Section */}
      <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Let's Start Your Education Journey.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
          <StatItem
            number="01"
            value="21K"
            label="Students Enroll"
            color="text-green-500"
          />
          <StatItem
            number="02"
            value="2,290+"
            label="Study Courses"
            color="text-teal-500"
          />
          <StatItem
            number="03"
            value="58+"
            label="Global Universities"
            color="text-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

// Helper components for reusability
const ChecklistItem = ({ text }) => (
  <li className="flex items-start">
    <svg
      className="flex-shrink-0 h-6 w-6 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="ml-3 text-base text-gray-700">{text}</p>
  </li>
);

const StatItem = ({ number, value, label, color }) => (
  <div className="flex items-center space-x-4">
    <span className={`text-4xl font-extrabold ${color}`}>{number}</span>
    <div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-sm font-medium text-gray-500">{label}</p>
    </div>
  </div>
);

export default EducationFlatform;
