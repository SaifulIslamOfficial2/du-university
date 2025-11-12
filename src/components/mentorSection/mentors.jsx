import React, { useEffect, useState } from "react";
import techer1 from "../../assets/img/saiful.jpg";
import techer2 from "../../assets/img/boytecher.jpg.webp";
import techer3 from "../../assets/img/mam.jpg";
import techer4 from "../../assets/img/girlTecher.jpg.jpg";

import MentorCard from "./MentorCard";
import { NavLink } from "react-router-dom";
// --- Mentor Data Array ---

// --- Mentor Card Component ---

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const mentorImages = [techer1, techer2, techer3, techer4];
  useEffect(() => {
    fetch("/mentors.json")
      .then((res) => res.json())
      .then((data) => {
        setMentors(data);
      });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-14">
          {/* Left Side: Text Content */}
          <div className="max-w-xl md:w-1/2 mb-8 md:mb-0">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600 mb-2">
              PROFESSIONAL MENTOR
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Find Expert Mentors in Their Field to Guide You
            </h2>
          </div>

          <div className="md:w-1/2 flex flex-col md:items-end md:text-right">
            <p className="text-gray-600 mb-6 max-w-sm">
              Connect with top experts in your field for personalized guidance
              and support to accelerate your career.
            </p>

            <NavLink
              to="/mentors"
              className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-6 rounded-lg shadow-xl transition duration-300 ring-2 ring-teal-500 ring-offset-2"
            >
              View All Mentors
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard
              key={index}
              name={mentor.name}
              role={mentor.role}
              imageUrl={mentorImages[index % mentorImages.length]}
              expertise={mentor.expertise}
              id={mentor.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
