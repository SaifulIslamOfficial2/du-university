// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import SkillCard from "../../pages/SkillCard";

// function AllCoursFeed() {
//   const data = useLoaderData(); // all courses
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     if (!data || !Array.isArray(data)) return;
//     setSelectedCourses(showAll ? data : data.slice(0, 6));
//   }, [data, showAll]);

//   const handleViewAll = () => {
//     setShowAll(true);
//   };

//   return (
//     <section className="container mx-auto">
//       <div className="flex flex-col items-center justify-center text-center py-4 sm:py-12">
//         <p className="text-base font-medium uppercase tracking-wider text-gray-700 mb-2">
//           Feature Courses
//         </p>

//         <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
//           Choose a Course to
//           <span className="block mt-1 text-blue-600">
//             <span
//               className="inline-block pb-3"
//               style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0,10 C30,5 70,15 100,10' stroke='%233b82f6' stroke-width='4' fill='none'/%3E%3C/svg%3E")`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "bottom",
//                 backgroundSize: "100% 12px",
//               }}
//             >
//               Get Started
//             </span>
//           </span>
//         </h2>
//       </div>

//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {selectedCourses.map((course, index) => (
//             <SkillCard key={course.skillId || index} skill={course} />
//           ))}
//         </div>

//         {!showAll && data && data.length > 6 && (
//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handleViewAll}
//               className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//             >
//               View All
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default AllCoursFeed;
