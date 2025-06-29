import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates, nostrum inventore animi vero excepturi ea dolorem atque accusantium laborum laudantium quibusdam! Doloremque impedit necessitatibus debitis culpa, placeat ullam modi, minus adipisci est, molestiae corporis quaerat harum sequi eius laborum!",
    features: ["main feature 1", "main feature 1", "main feature 1"],
    carousel: {
      enabled: true,
      slides: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"]
    },
    technologies: ["React", "Tailwind", "SwiperJS"],
    links: {
      live: "#",
      github: "#",
      details: "#"
    }
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates, nostrum inventore animi vero excepturi ea dolorem atque accusantium laborum laudantium quibusdam! Doloremque impedit necessitatibus debitis culpa, placeat ullam modi, minus adipisci est, molestiae corporis quaerat harum sequi eius laborum!",
    features: ["main feature 1", "main feature 1", "main feature 1"],
    carousel: {
      enabled: true,
      slides: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"]
    },
    technologies: ["React", "Tailwind", "SwiperJS"],
    links: {
      live: "#",
      github: "#",
      details: "#"
    }
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates, nostrum inventore animi vero excepturi ea dolorem atque accusantium laborum laudantium quibusdam! Doloremque impedit necessitatibus debitis culpa, placeat ullam modi, minus adipisci est, molestiae corporis quaerat harum sequi eius laborum!",
    features: ["main feature 1", "main feature 1", "main feature 1"],
    carousel: {
      enabled: true,
      slides: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"]
    },
    technologies: ["Next.js", "TypeScript", "GraphQL"],
    links: {
      live: "#",
      github: "#",
      details: "#"
    }
  }
];
const Projects = () => {
  return (
    <div  className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  ">
         
    <div className="p-4 mx-auto  md:w-7xl space-y-12">
      <h1 className="text-3xl text-center  font-bold mb-4">Projects</h1>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div></div>
 
  );
};

export default Projects;
