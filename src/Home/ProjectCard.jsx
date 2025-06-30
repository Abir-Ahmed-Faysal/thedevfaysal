import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Github, Info, Radio } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="grid grid-cols-1 md:p-10 md:max-w-6xl lg:max-w-7xl mx-auto text-white lg:grid-cols-2 gap-8 border p-4 rounded-xl shadow">
      
      {/* Carousel Section */}
      <div>
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
          >
            {project.carousel.slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <img src={slide} alt={`Slide ${idx + 1}`} className="rounded-xl" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Text Section */}
      <div className="space-y-4">
        <h3 className="text-xl lg:w-11/12 w-10/12 font-semibold">{project.title}</h3>
        <p className="text-white">{project.description}</p>

        <div>
          <h4 className="font-medium">Features:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
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
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ) : null
          )}
        </div>

        <div className="flex gap-3 mt-2">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded flex items-center hover:bg-green-700"
          >
            <Radio /> Live
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white flex items-center gap-2 rounded hover:bg-gray-900"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={project.links.details}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white flex items-center gap-2 rounded hover:bg-blue-700"
          >
            <Info size={16} /> Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
