import { useState } from 'react';
import logo from '../assets/final.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <header className="p-4 fixed w-full bg-transparent z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <img className="w-10 sm:w-16 filter grayscale transition duration-300" src={logo} alt="Logo" />
    </div>
    <ul className="hidden md:flex space-x-6">
      {["Home", "About", "Projects", "Contact"].map((link, idx) => (
        <li key={idx}>
          <a href="#" className="text-white hover:text-orange-500 text-sm sm:text-base">{link}</a>
        </li>
      ))}
    </ul>
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
  {isOpen && (
    <div className="md:hidden bg-blue-900 p-4 space-y-2 text-white">
      {["Home", "About", "Projects", "Contact"].map((link, idx) => (
        <a key={idx} href="#" className="block hover:text-orange-500">{link}</a>
      ))}
    </div>
  )}
</header>

    );
};

export default Navbar;
