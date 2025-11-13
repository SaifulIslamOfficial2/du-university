import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Star, Share2, Clock, BookOpen, Users, Globe } from "lucide-react";
import techer1 from "../../assets/img/saiful.jpg";
import techer2 from "../../assets/img/boytecher.jpg.webp";
import techer3 from "../../assets/img/mam.jpg";
import techer4 from "../../assets/img/girlTecher.jpg.jpg";

const mentorImages = [techer1, techer2, techer3, techer4];

function MentorDetails() {
  const mentorData = useLoaderData();
  const { id } = useParams();
  const mentor = mentorData.find((m) => m.id === parseInt(id));

  const [activeTab, setActiveTab] = useState("Profile");
  const mentorImage = mentorImages[mentor.id - 1];

  if (!mentor) {
    return (
      <p className="text-center text-red-600 text-xl font-bold mt-20">
        Mentor Not Found
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Mentor Image + Course Title */}
            <div>
              <div className="relative">
                <img
                  src={mentorImage}
                  alt={mentor.name}
                  className="w-full h-72 md:h-96 rounded-3xl object-cover shadow-xl"
                />

                <span className="absolute top-5 left-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                  UX Research
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold mt-8 text-gray-900 leading-tight">
                Mastering UX Research: From Insights to Impact
              </h1>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={mentorImage}
                  alt={mentor.name}
                  className="w-12 h-12 rounded-full ring-4 ring-purple-100"
                />
                <div className="text-left">
                  <p className="text-lg font-bold text-gray-900">
                    {mentor.name}
                  </p>
                  <p className="text-purple-700 font-medium">{mentor.role}</p>
                  <div className="flex items-center gap-1 mt-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-gray-600 ml-1">
                      (4,821)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-2xl">
                <p className="text-sm opacity-90">Amount</p>
                <p className="text-4xl font-bold mt-1">$59.00</p>
                <p className="text-sm opacity-80 mt-1">1 month free trial</p>
                <button className="w-full mt-5 bg-white text-purple-700 font-bold py-3.5 rounded-xl hover:bg-gray-100 transition transform hover:scale-105">
                  Buy now
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg mt-6 space-y-4 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg">
                  Course details:
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>
                      Mentor:{" "}
                      <strong className="text-gray-900">{mentor.name}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <span>
                      Lessons: <strong>12</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span>
                      Duration: <strong>15hrs</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      I
                    </div>
                    <span>
                      Level: <strong>Intermediate</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <span>
                      Language: <strong>English</strong>
                    </span>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-2 w-full mt-6 bg-purple-50 text-purple-700 font-semibold py-3 rounded-xl hover:bg-purple-100 transition">
                  <Share2 className="w-4 h-4" />
                  Share this course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-2 border-b border-gray-200">
          {["Overview", "Course Outline", "Profile", "Reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === tab
                  ? "bg-white text-purple-600 border-b-2 border-purple-600 shadow-sm"
                  : "text-gray-600 hover:text-purple-600 bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 bg-white p-8 rounded-b-2xl rounded-tr-2xl shadow-md">
          {/* Overview */}
          {activeTab === "Overview" && (
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dive deep into the world of UX Research with hands-on
                methodologies, real-world case studies, and expert guidance.
                Learn how to conduct user interviews, usability testing, and
                synthesize insights into actionable design recommendations.
              </p>

              <p>
                This course is perfect for aspiring UX researchers, product
                designers, and anyone passionate about understanding users.
              </p>
            </div>
          )}
          NP
          {/* Course Outline */}
          {activeTab === "Course Outline" && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900">
                Course Modules
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Introduction to UX Research
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Planning User Interviews
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Usability Testing Frameworks
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Data Synthesis & Reporting
                </li>
              </ul>
            </div>
          )}
          {/* Profile - Only Dynamic Part */}
          {activeTab === "Profile" && (
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-gray-900">
                Mentor: {mentor.name}
              </h3>
              <p className="text-lg font-semibold text-purple-700">
                {mentor.role}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {mentor.expertise}.
              </p>
              <p className="text-gray-600 italic">
                With over 10 years of experience in UX research, {mentor.name}{" "}
                has led research initiatives at top tech companies, helping
                teams build user-centered products that delight millions.
              </p>
            </div>
          )}
          {/* Reviews */}
          {activeTab === "Reviews" && (
            <div className="text-center py-8 text-gray-500">
              <p className="italic">
                No reviews yet. Be the first to review this course!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MentorDetails;
