import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Download } from "lucide-react";
import logo from "../assets/thedevfaysal.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-slate-700 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-11/12 lg:w-full mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <h1 className="font-bold text-4xl text-white">thedevfaysal</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-[#f35e59]"
              className="cursor-pointer px-3 py-1 rounded transition duration-300 hover:text-[#f35e59]"
            >
              {link.name}
            </Link>
          ))}

          {/* Download CV Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1Vt0q1O5aaUQirqTBCGwljRHuWrSLSirQ"
            download
            className="flex justify-center items-center space-x-2 text-[#F35E59] border border-[#F35E59] p-2 py-1 rounded hover:bg-[#F35E59] hover:text-white transition duration-300"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Download CV</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900/90 backdrop-blur-md p-4 space-y-2 text-white">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-[#F35E59]"
              className="block cursor-pointer hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Download Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1Vt0q1O5aaUQirqTBCGwljRHuWrSLSirQ"
            download
            className="flex items-center space-x-2 px-3 py-2 rounded border border-[#F35E59] text-[#F35E59] hover:bg-[#F35E59] hover:text-white transition duration-300"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
