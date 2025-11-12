import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function SkillDetails() {
  const { id } = useParams();
  const uniqId = parseInt(id);
  const data = useLoaderData();

  // skill খুঁজে বের করা
  const skillData = data.find((skill) => skill.skillId === uniqId);

  if (!skillData) {
    return (
      <p className="text-center text-red-600 text-xl font-bold mt-20">
        Skill details data not found
      </p>
    );
  }

  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = skillData;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-10">
      {/* Image */}
      <img
        src={image}
        alt={skillName}
        className="w-full h-64 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{skillName}</h1>
        <p className="text-gray-600 mb-3">{description}</p>

        <div className="text-sm text-gray-700 mb-3">
          <p>
            Category: <span className="font-semibold">{category}</span>
          </p>
          <p>
            Provider: <span className="font-semibold">{providerName}</span> ·{" "}
            <a
              href={`mailto:${providerEmail}`}
              className="text-blue-600 hover:underline"
            >
              {providerEmail}
            </a>
          </p>
          <p>
            Price: <span className="font-semibold">${price}</span> · Rating:{" "}
            <span className="font-semibold">{rating} ⭐</span>
          </p>
          <p>Slots Available: {slotsAvailable}</p>
        </div>

        {/* Booking Form */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h2 className="font-semibold text-lg mb-2">Book This Skill</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillDetails;
