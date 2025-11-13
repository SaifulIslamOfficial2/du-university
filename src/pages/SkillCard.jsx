import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden p-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // animate once when 20% visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <span className="text-xs font-semibold text-purple-500 uppercase mb-2 inline-block">
        {skill.category}
      </span>
      <h2 className="text-lg font-bold mb-1">{skill.skillName}</h2>
      <p className="flex items-center text-yellow-500 mb-2">
        ★ {skill.rating}{" "}
        <span className="text-gray-400 text-sm ml-2">
          ({skill.reviews || "0 reviews"})
        </span>
      </p>
      <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={skill.instructorAvatar || "https://i.pravatar.cc/40"}
            alt={skill.providerName}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-sm font-medium">{skill.providerName}</p>
            <p className="text-xs text-gray-400">Instructor</p>
          </div>
        </div>
        <Link
          to={`/skillDetails/${skill.skillId}`}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Enroll Now
        </Link>
      </div>
    </motion.div>
  );
};

export default SkillCard;
