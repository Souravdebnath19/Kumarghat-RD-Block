"use client";
import Link from "next/link";
import { useState, useRef } from "react";

const Grampanchyat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <div
      className="relative z-10 inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex "
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        GP & VC
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-labelledby="about-district-button"
        >
          <li role="menuitem">
            <Link
              href="/gram-panchyat"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              GRAM PANCHYAT
            </Link>
          </li>
          <li role="menuitem">
            <Link
              href="/village-council"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              VILLAGE COMMITTEESS
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Grampanchyat;
