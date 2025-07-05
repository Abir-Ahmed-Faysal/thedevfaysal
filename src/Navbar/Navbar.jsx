import { useState } from 'react';
import { Link } from 'react-scroll';
import { Download } from 'lucide-react';
import logo from '../assets/a.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className=" fixed w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       <div >
        
          <img
    className="w-24 sm:w-40 h-fit md:w-50 lg:w-55 xl:w-75 filter grayscale transition duration-300"
    src={logo}
    alt="Logo"
  />
        
  
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-[#f35e59]"
              className="cursor-pointer px-3 py-1 rounded   transition duration-300"
            >
              {link.name}
            </Link>
          ))}

          {/* Download CV Button */}
          <a
         href="https://drive.google.com/uc?export=download&id=1Vt0q1O5aaUQirqTBCGwljRHuWrSLSirQ"
      download
            className="flex justify-center items-center space-x-2 text-[#F35E59]  btn btn-outline gap-1  p-2 py-1 rounded hover:bg-[#F35E59] hover:text-white transition duration-300"
          >
            <Download className="w-4 h-4" /><span className="text-sm">Download CV</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 p-4 space-y-2 text-white">
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
            href="/cv.pdf"
            download
            className="flex items-center space-x-2   px-3 py-2 rounded hover:bg-[#F35E59] hover:text-white transition duration-300"
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
