import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MentorCard = ({ name, role, imageUrl, expertise, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 mb-6"
    >
      <Link
        to={`/mentorDetails/${id}`}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
          <motion.img
            src={imageUrl}
            alt={`Portrait of ${name}`}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/placeholder.jpg";
            }}
          />
        </div>

        <p className="text-xl font-bold text-gray-900 mt-2">{name}</p>
        <p className="text-sm font-medium text-teal-700 mb-3">{role}</p>

        <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
          <strong>Focus:</strong> {expertise}
        </p>

        <div className="flex space-x-4 text-gray-500 text-lg">
          <a
            href="#"
            className="hover:text-blue-600 transition duration-150"
            aria-label={`Connect with ${name} on LinkedIn`}
          >
            <span className="font-sans font-bold">in</span>
          </a>
          <a
            href="#"
            className="hover:text-pink-600 transition duration-150"
            aria-label={`View ${name}'s Portfolio`}
          >
            <span className="font-sans font-bold">🌐</span>
          </a>
        </div>
      </Link>
    </motion.div>
  );
};

export default MentorCard;
