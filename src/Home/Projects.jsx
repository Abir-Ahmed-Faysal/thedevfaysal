import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Fusion Crave - Recipe Book App for Food Lovers",
description:
  "Fusion Crave is a user-friendly Recipe Book App designed for food lovers to manage, explore, and favorite recipes. Featuring Firebase authentication, private routes, dynamic recipe interaction, and filtering, it creates an engaging and responsive platform for culinary enthusiasts. Users can add, update, delete, and like recipes, with top liked ones displayed on the homepage. The app includes theme toggling, secure form validation, toast notifications, and a custom 404 page — all built with modern web technologies.",
features: ["React.js", "Node.js & Express", "MongoDB"],

    carousel: {
      enabled: true,
      slides: ["https://i.ibb.co/fVsLqsz2/chrome-n6-Ngy-E9-Zp-A.png", "https://i.ibb.co/4Rz8s7tH/chrome-7-Zx0-QNRz-ZC.png","https://i.ibb.co/4Rz8s7tH/chrome-7-Zx0-QNRz-ZC.png"]
    },
    technologies: ["React", "Tailwind", "SwiperJS"],
    links: {
      live: "https://fusioncrave.surge.sh/",
      client: "https://github.com/Abir-Ahmed-Faysal/fusionCrave-Client",
      server: "https://github.com/Abir-Ahmed-Faysal/fusionCrave-server",
      details: "https://github.com/Abir-Ahmed-Faysal/fusionCrave-Client/blob/main/README.md"
    }
  },
  {
 title: "SafeLayer - Cybersecurity Subscription Box Service",
description:
  "SafeLayer is a cybersecurity subscription box service that enables users to browse, subscribe to, and manage monthly boxes curated for cybersecurity enthusiasts and professionals. The platform features Firebase authentication, protected routes, dynamic content rendering, and responsive design. Users can leave reviews, manage their profiles, and explore services through an intuitive interface built with React, Tailwind CSS, and Firebase.",
features: ["Firebase ", "Data Filter", "Responsive Design"],
    carousel: {
      enabled: true,
      slides: ["https://i.ibb.co/wZtCgLzS/chrome-wa-Op-Mb49-UN.jpg", "https://i.ibb.co/7J9whkYh/chrome-P8k-Zm-Z0-Ap-M.png","https://i.ibb.co/dssj17b1/chrome-e-Lxr-Nx-D3-Zv.png"]
    },
    technologies: ["React", "Tailwind", "SwiperJS"],
    links: {
      live: "https://safelayer-universal.surge.sh/",
      client: "https://github.com/Abir-Ahmed-Faysal/safeLayer",
      server: "https://github.com/Abir-Ahmed-Faysal/safeLayer",
      details: "https://github.com/Abir-Ahmed-Faysal/safeLayer/blob/main/README.md"
    }
  },
  {
  title: "Savorly - Secure With Jwt & Firebase based Restaurant ",
description:
  "Savorly is a MERN Stack-based restaurant management web app where users can add, order, and manage foods. It features secure authentication (Firebase + JWT), private routes, responsive UI, and dynamic pages like My Foods, My Orders, and Food Gallery.",
features: ["Secure Authentication & Authorization", "Dynamic Food Management System", "Responsive Design"],
    carousel: {
      enabled: true,
      slides: ["https://i.ibb.co/JRzGTS2d/71u-Xlw4b-Xc.png", "https://i.ibb.co/9kynq6tJ/Xjosenmfo8.png","https://i.ibb.co/bg4nmsgJ/x-Qt-DJKRxa-O.jpg"]
    },
    technologies: ["Mongodb", "React", "express js"],
    links: {
      live: "http://savorly-faysal.surge.sh/",
      client: "https://github.com/Abir-Ahmed-Faysal/savorly",
      server: "https://github.com/Abir-Ahmed-Faysal/savorly_server",
      details: "https://github.com/Abir-Ahmed-Faysal/savorly/blob/main/README.md"
    }
  }
];
const Projects = () => {
  return (
    <div  className="bg-gray-900  ">
         
    <div className="p-4 mx-auto   space-y-12">
      <h1 className="text-3xl text-white text-center  font-bold mb-4">Projects</h1>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div></div>
 
  );
};

export default Projects;
