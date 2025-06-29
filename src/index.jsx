import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Home/Banner";
import AboutMe from "./Home/AboutMe";
import Projects from "./Home/Projects";
import Contact from "./Home/Contact";

const Index = () => {
  return (
    <>
      {" "}
      <div className="relative">
        <Navbar></Navbar>
        <Banner></Banner>
        <AboutMe></AboutMe>
      </div>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Index;
