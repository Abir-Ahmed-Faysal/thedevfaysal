import React from "react";
import Faysal from "../assets/faysal.jpeg";
const AboutMe = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-8 md:px-16 md:py-20">
      <div
        className="w-full lg:items-start   items-center
       max-w-6xl flex flex-col lg:flex-row gap-14"
      >
        {/* Image Section */}
        <div className="w-full border rounded-xl  md:w-[40%] flex justify-center">
          <img
            src={Faysal}
            alt="Portrait"
            className="w-full rounded-xl max-w-xs md:max-w-sm  shadow-2xl"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full flex flex-col md:gap-10 lg:gap-16 text-white">
          {/* Heading Section */}
          <div className="space-y-2.5">
            <h3 className="text-lg sm:text-xl text-[rgb(243,94,89)] font-bold">
              Discover
            </h3>
            <h1 className="text-3xl sm:text-5xl font-bold">About Me</h1>
            <div className="md:w-12 w-8 border-t-2 mt-6 border-[rgb(243,94,89)] "></div>
          </div>

          {/* Info Table */}
          <div className="border border-[rgb(243,94,89)]  rounded-lg p-4 sm:p-6 text-sm sm:text-base">
            <p>
              I’m Faysal Ahmed, currently pursuing my B.Sc. in Chemistry at
              Satkhira Government College. Since I was young, I’ve been really
              curious about how technology works—whether it’s software,
              networking, or automation. This curiosity led me to watch lots of
              YouTube videos to learn more and fuel my creativity.
              <br /><br />
              Although I started studying chemistry, I gradually realized that
              my true passion lies in technology. So, to follow my interests and
              dreams, I enrolled in a professional programming course with
              Programming Hero. Through this course, I discovered the exciting
              world of software development, which opened my mind to new ideas.
              <br /><br />
              Now, I have learned the MERN stack, focusing especially on
              frontend development. I believe that with consistent effort,
              dedication, and a creative mindset, I can grow into a successful
              staff engineer in the future. I’m excited to bring fresh ideas and
              contribute to the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
