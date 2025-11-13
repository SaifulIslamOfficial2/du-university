import React, { useEffect, useState } from "react";
import SkillCard from "../../pages/SkillCard";

function CoursFeed() {
  const [allCourses, setAllCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState([]);
  const [showAll, setShowAll] = useState(false);

  //  Fetch courses data
  useEffect(() => {
    fetch("/skillData.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllCourses(data);
          setVisibleCourses(data.slice(0, 6));
        }
      })
      .catch((err) => console.error("Error loading courses:", err));
  }, []);

  //  Update visible cours
  useEffect(() => {
    if (showAll) {
      setVisibleCourses(allCourses);
    } else {
      setVisibleCourses(allCourses.slice(0, 6));
    }
  }, [showAll, allCourses]);

  //Toggle View All
  const handleToggleView = () => {
    setShowAll((prev) => !prev);
  };

  // Loading or Empty state
  if (!allCourses.length) {
    return (
      <p className="text-center text-gray-600 text-lg font-semibold mt-20">
        Loading courses...
      </p>
    );
  }

  return (
    <section className="container mx-auto">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center py-4 sm:py-12">
        <p className="text-base font-medium uppercase tracking-wider text-gray-700 mb-2">
          Feature Courses
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Choose a Course to
          <span className="block mt-1 text-blue-600">
            <span
              className="inline-block pb-3"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0,10 C30,5 70,15 100,10' stroke='%233b82f6' stroke-width='4' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "100% 12px",
              }}
            >
              Get Started
            </span>
          </span>
        </h2>
      </div>

      {/* Course Cards */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCourses.map((course, index) => (
            <SkillCard key={course.skillId || index} skill={course} />
          ))}
        </div>

        {/* View All / Show Less Button */}
        {allCourses.length > 6 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleToggleView}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CoursFeed;
