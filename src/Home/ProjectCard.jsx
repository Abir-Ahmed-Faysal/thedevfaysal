import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Github, Info, Radio } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 border p-4 md:p-10 rounded-xl shadow mx-auto text-white">
      {/* Carousel Section */}
      <div className="w-full max-w-full overflow-hidden">
        {project.carousel.enabled && project.carousel.slides.length > 0 && (
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="rounded-xl"
          >
            {project.carousel.slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={slide}
                  alt={`Slide ${idx + 1}`}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Text Section */}
      <div className="space-y-4">
        <h3 className="text-xl text-[rgb(243,94,89)] lg:w-11/12 w-10/12 font-semibold">
          {project.title}
        </h3>
        <p className="text-white line-clamp-4">{project.description}</p>

        <div>
          <h4 className="font-medium">Features:</h4>
          <ul className="list-disc list-inside text-sm text-gray-400">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, idx) =>
            tech ? (
              <span
                key={idx}
                className="bg-[rgb(243,94,89)] text-white text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ) : null
          )}
        </div>

        <div className="flex gap-3 mt-2 flex-wrap">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2 hover:bg-green-700"
          >
            <Radio size={16} /> Live
          </a>

          {/* GitHub Dropdown */}
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="px-4 py-2 bg-gray-800 text-white rounded flex items-center gap-2 hover:bg-gray-900"
            >
              <Github size={16} /> GitHub
            </button>

            {/* Dropdown Options */}
            <div
              className={`absolute left-0 top-[-110px] w-40 transition-all duration-300 ${
                showOptions
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              } flex flex-col gap-2 bg-gray-800 text-white rounded p-3 shadow-md`}
            >
              <a
                href={project.links.client}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Client Code
              </a>
              <a
                href={project.links.server}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Server Code
              </a>
            </div>
          </div>

          <a
            href={project.links.details}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2 hover:bg-blue-700"
          >
            <Info size={16} /> Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
