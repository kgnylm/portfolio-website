import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary"></Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary">
              About
            </a>
            <a href="#experience" className="text-gray-700 hover:text-primary">
              Experience
            </a>
            <a href="#projects" className="text-gray-700 hover:text-primary">
              Projects
            </a>
            <Link to="/resume" className="text-gray-700 hover:text-primary">
              Resume
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-primary">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              About
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Projects
            </a>
            <Link
              to="/resume"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Resume
            </Link>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
