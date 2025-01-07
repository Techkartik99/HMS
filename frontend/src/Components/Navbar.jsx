import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 fixed w-full h-[8vh] z-30 shadow-lg text-white">
      <div className="flex justify-between items-center w-full px-6 md:px-10 h-full">
        {/* Logo */}
        <div
          className="font-logo text-3xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => navigate('/')}
        >
          Royal Destination
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Navigation Links (Desktop and Tablet) */}
        <ul className={`md:flex md:gap-8 hidden text-lg font-medium`}>
          <li
            className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => navigate('/')}
          >
            Home
          </li>
          <li
            className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => navigate('/about')}
          >
            About
          </li>
          <li
            className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => navigate('/bookings')}
          >
            Bookings
          </li>
          <li
            className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => navigate('/reviews')}
          >
            Reviews
          </li>
          <li
            className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => navigate('/blogs')}
          >
            Blogs
          </li>
        </ul>

        {/* Book Button */}
        <button
          className="bg-yellow-400 px-6 py-2 rounded-3xl font-semibold text-white shadow-md hover:bg-yellow-500 hover:scale-105 hover:shadow-lg transition-all duration-300"
          onClick={() => navigate('/auth')}
        >
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 p-6 absolute top-[8vh] w-full shadow-lg rounded-b-xl">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li
              className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => navigate('/about')}
            >
              About
            </li>
            <li
              className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => navigate('/bookings')}
            >
              Bookings
            </li>
            <li
              className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => navigate('/reviews')}
            >
              Reviews
            </li>
            <li
              className="cursor-pointer relative hover:text-yellow-300 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => navigate('/blogs')}
            >
              Blogs
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
