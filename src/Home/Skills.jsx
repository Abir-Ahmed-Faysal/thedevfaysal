import React from "react";
import {
  DiMongodb,
  DiJavascript1,
  DiReact,
  DiGithubBadge,
} from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";

const Skills = () => {
  const primaryColor = 'white';
  const bgColor = "bg-[rgb(28,38,54)]"; 

  const skills = [
    { name: "MERN Stack", icon: <DiReact size={50} color={primaryColor} /> },
    { name: "JavaScript", icon: <DiJavascript1 size={50} color={primaryColor} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color={primaryColor} /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} color={primaryColor} /> },
    { name: "Firebase", icon: <SiFirebase size={50} color={primaryColor} /> },
    { name: "GitHub", icon: <DiGithubBadge size={50} color={primaryColor} /> },
    { name: "MongoDB", icon: <DiMongodb size={50} color={primaryColor} /> },
  ];

  return (
    <section className={`${bgColor} text-white py-12 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: primaryColor }}
        >
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 hover:scale-110 transform transition duration-300"
            >
              {skill.icon}
              <p className="text-lg font-semibold" style={{ color: primaryColor }}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
