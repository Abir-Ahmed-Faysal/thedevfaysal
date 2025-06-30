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
      slides: ["https://i.ibb.co/fVsLqsz2/chrome-n6-Ngy-E9-Zp-A.png", "https://i.ibb.co/4Rz8s7tH/chrome-7-Zx0-QNRz-ZC.png","https://i.ibb.co/4Rz8s7tH/chrome-7-Zx0-QNRz-ZC.png"]
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
      slides: ["https://i.ibb.co/wZtCgLzS/chrome-wa-Op-Mb49-UN.jpg", "https://i.ibb.co/7J9whkYh/chrome-P8k-Zm-Z0-Ap-M.png","https://i.ibb.co/dssj17b1/chrome-e-Lxr-Nx-D3-Zv.png"]
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
      slides: ["https://i.ibb.co/pB0c0vMt/chrome-Bo1-Nypqt-C7.png", "https://i.ibb.co/bMcCq5Lp/chrome-JGu-JAua4y-O.png","https://i.ibb.co/xSd5PNtg/chrome-EG2-Dbi7-U0r.png"]
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
    <div  className="bg-gray-900  ">
         
    <div className="p-4 mx-auto  md:w-7xl space-y-12">
      <h1 className="text-3xl text-center  font-bold mb-4">Projects</h1>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div></div>
 
  );
};

export default Projects;
