import createGirl from "../../assets/img/createGirl.jpg";

export default function CreatorSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#e7ebff] py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">
        <div className="relative flex justify-center md:justify-end">
          <div className="bg-[#2A48FF] rounded-3xl p-4 sm:p-6 relative w-[90%] sm:w-[340px] md:w-[380px]">
            <img
              src={createGirl}
              alt="creator"
              className="rounded-2xl object-cover w-full h-auto"
            />

            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/90 text-white text-xs sm:text-sm rounded-xl px-3 py-2 sm:px-4 sm:py-2 shadow-lg">
              <p className="text-gray-300">Year to Date</p>
              <h3 className="text-base sm:text-lg font-semibold">$1,200</h3>
              <span className="text-green-400 text-[10px] sm:text-xs">
                +12%
              </span>
            </div>

            <div className="absolute bottom-3 right-[-20px] sm:bottom-4 sm:right-[-40px] bg-black/90 text-white text-xs sm:text-sm rounded-xl px-3 py-2 sm:px-4 sm:py-2 shadow-lg">
              <p className="text-gray-300">Total Revenue</p>
              <h3 className="text-base sm:text-lg font-semibold">$120.29</h3>
              <span className="text-green-400 text-[10px] sm:text-xs">
                +12%
              </span>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-[#4F46E5] font-medium mb-2 text-sm sm:text-base">
            Be a Creator
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
            Create & Manage <br className="hidden sm:block" /> Courses Easily.
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            <strong>ByteSpace</strong> supports individuals or entities in the
            creation, publication, and administration of educational courses.
          </p>

          <ul className="space-y-3 sm:space-y-4">
            {[
              "Share Your Expertise",
              "Monetize Your Passion",
              "Flexibility and Autonomy",
              "Build a Community",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-center md:justify-start gap-3"
              >
                <span className="w-5 h-5 flex items-center justify-center bg-[#4F46E5] rounded-full text-white text-xs">
                  ✓
                </span>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
