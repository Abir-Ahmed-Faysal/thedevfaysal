import { Element } from "react-scroll";
import Navbar from "./Navbar/Navbar";
import Banner from "./Home/Banner";
import AboutMe from "./Home/AboutMe";
import Projects from "./Home/Projects";
import Contact from "./Home/Contact";

const Index = () => {
  return (
    <>
      <div className="relative">
        <Navbar />

        <Element name="home">
          <Banner />
        </Element>
</div>
        <Element name="about">
          <AboutMe />
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
