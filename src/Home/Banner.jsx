import Faysal from "../assets/profile.jpeg";
import { Github, Linkedin, Twitter, Download } from "lucide-react";

const Banner = () => {
  return (
    <section className="pt-20 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-0"></div>

      <div className="text-center flex flex-col items-center p-6 z-10">
        <img
          src={Faysal}
          alt="Faysal Ahmed"
          className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover shadow-lg mb-6"
        />

        <h1 className="text-2xl sm:text-3xl font-bold text-[rgb(243,94,89)]">
         Md Faysal Ahmed
        </h1>
        <p className="text-base sm:text-lg mt-2 text-white font-semibold max-w-lg">
          A MERN Stack based Frontend Developer
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-white">
          <a
            href="https://github.com/Abir-Ahmed-Faysal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              className="hover:text-[rgb(243,94,89)] transition-all"
              size={28}
            />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              className="hover:text-[rgb(243,94,89)] transition-all"
              size={28}
            />
          </a>
          <a
            href="https://x.com/_ahmed_faysal_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className="hover:text-[rgb(243,94,89)] transition-all"
              size={28}
            />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1Xp69rYIbj829Ob3YLad5OYBPmYXAvlza"
          download
          className="mt-6 inline-flex items-center gap-2 bg-[rgb(243,94,89)] text-white px-6 py-2 rounded-full font-medium hover:bg-[rgb(214,73,68)] transition-all"
        >
          <Download size={20} />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Banner;
