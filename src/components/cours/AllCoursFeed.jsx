import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SkillCard from "../../pages/SkillCard";

function AllCoursFeed() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const { category } = useParams(); // category string
  const data = useLoaderData();

  useEffect(() => {
    if (!data) return;

    // যদি category 'all' বা undefined হয় → সব course দেখাবে
    if (!category || category.toLowerCase() === "all") {
      setSelectedCourse(data);
    } else {
      // category অনুযায়ী filter
      const filteredCourses = data.filter(
        (course) => course.category.toLowerCase() === category.toLowerCase()
      );
      setSelectedCourse(filteredCourses);
    }
  }, [data, category]);

  return (
    <section className="container mx-auto">
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

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCourse.map((course) => (
            <SkillCard key={course.id} skill={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllCoursFeed;
