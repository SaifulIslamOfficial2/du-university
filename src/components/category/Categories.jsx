import React, { use } from "react";
import {
  FaBook,
  FaUser,
  FaLaptopCode,
  FaFeather,
  FaHeart,
  FaStethoscope,
  FaCamera,
  FaFilm,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const icons = {
  economics: FaBook,
  management: FaUser,
  "science-tech": FaLaptopCode,
  culture: FaFeather,
  health: FaHeart,
  medical: FaStethoscope,
  photography: FaCamera,
  cinema: FaFilm,
};

const AllCategories = fetch("/skillCategory.json").then((res) => res.json());

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Categories() {
  const categories = use(AllCategories);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="md:flex md:justify-between md:items-start mb-12">
        <div>
          <p className="text-sm text-gray-500 font-semibold uppercase">
            Course Categories
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Browse Top <span className="text-blue-600">Categories</span>
          </h2>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {categories.map((cat) => {
          const slug = cat.icon_slug.toLowerCase().replace(/\s/g, "");
          const Icon = icons[slug] || FaBook;

          return (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.1 }}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100 text-center cursor-pointer"
            >
              <Link to={`/category/${cat.icon_slug}`}>
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center">
                  <Icon className="text-3xl text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500">{cat.count} Courses</p>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Categories;
