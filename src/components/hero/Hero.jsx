import { NavLink } from "react-router-dom";
import student from "../../assets/student.jpg";
import img2 from "../../assets/img/heroimg.jpeg";
import img3 from "../../assets/img/girl-student.jpg.webp";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Providing Best Education",
      highlight: "Brighter Future",
      subtitle: "Welcome to troostudy",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btn1: "View All Courses",
      btn2: "Contact Us",
      img: student,
    },
    {
      id: 2,
      title: "Learn Skills & Grow Faster",
      highlight: "Unlock Potential",
      subtitle: "Your Best Learning Platform",
      desc: "Start your journey with world-class mentors & practical learning.",
      btn1: "Explore Courses",
      btn2: "Join Now",
      img: img2,
    },
    {
      id: 3,
      title: "Education for Everyone",
      highlight: "Build Your Future",
      subtitle: "Top Quality Study Materials",
      desc: "We help students achieve success and bright careers.",
      btn1: "Browse Courses",
      btn2: "Talk to Us",
      img: img3,
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative bg-white py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                {/* Content */}
                <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
                  <p className="text-gray-500 mb-2">{slide.subtitle}</p>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                    {slide.title} <br />
                    For{" "}
                    <span className="text-green-500">{slide.highlight}</span>
                  </h1>

                  <p className="mt-3 text-base text-gray-500 sm:text-lg">
                    {slide.desc}
                  </p>

                  <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                    <NavLink
                      to="/category/0"
                      className="px-6 py-3 rounded-md bg-green-500 hover:bg-green-600 text-white"
                    >
                      {slide.btn1}
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {slide.btn2}
                    </NavLink>
                  </div>
                </div>

                {/* Image */}
                <div className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
                  <img
                    className="w-full max-w-sm lg:max-w-none h-auto object-cover rounded-lg shadow-md"
                    src={slide.img}
                    alt="hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
