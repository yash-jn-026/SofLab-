import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="order-2 md:order-1">
          <h1 className="text-white text-4xl pl-4">softLab</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden order-1">
          <button
            className="group h-15 w-10 rounded-lg focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="grid justify-items-center gap-1.5">
              <span
                className={`h-1 w-8 rounded-full bg-white transition-transform transform ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`h-1 w-8 rounded-full bg-white transition-transform transform ${
                  isOpen ? "scale-x-0" : ""
                }`}
              ></span>
              <span
                className={`h-1 w-8 rounded-full bg-white transition-transform transform ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex flex-row justify-center items-center md:order-2 text-white text-2xl pr-4">
          <ul className="flex font-poppins space-x-8">
            <li className="hover:text-gray-400 transition-colors">Home</li>
            <li className="hover:text-gray-400 transition-colors">About</li>
            <li className="hover:text-gray-400 transition-colors">Team</li>
            <li className="hover:text-gray-400 transition-colors">
              Testimonials
            </li>
            <li className="hover:text-gray-400 transition-colors">Gallery</li>
            <li className="hover:text-gray-400 transition-colors">Contact</li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg- ${
          isOpen ? "max-h-screen py-2" : "max-h-0 overflow-hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="text-white text-xl font-poppins flex flex-col space-y-4 items-center">
          <li className="hover:text-gray-400 transition-colors">Home</li>
          <li className="hover:text-gray-400 transition-colors">About</li>
          <li className="hover:text-gray-400 transition-colors">Team</li>
          <li className="hover:text-gray-400 transition-colors">
            Testimonials
          </li>
          <li className="hover:text-gray-400 transition-colors">Gallery</li>
          <li className="hover:text-gray-400 transition-colors">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
