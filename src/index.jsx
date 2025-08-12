import { Element } from "react-scroll";
import Navbar from "./Navbar/Navbar";
import Banner from "./Home/Banner";
import AboutMe from "./Home/AboutMe";
import Projects from "./Home/Projects";
import Contact from "./Home/Contact";
import Skills from "./Home/Skills";

const Index = () => {
  return (
  <>
  <Navbar />

  <Element name="home">
    <Banner />
  </Element>

  <Element name="about">
    <AboutMe />
  </Element>

  <Element name="skills">
    <Skills />
  </Element>

  <Element name="projects">
    <Projects />
  </Element>

  <Element name="contact">
    <Contact />
  </Element>
</>

  );
};

export default Index;
