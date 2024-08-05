"use client";
import Link from "next/link";
import { useState } from "react";

const Citizens = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className="relative inline-block text-left">
      <Link href="/citizens-charter">
        <button
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex  "
        >
          Citizens Charter
        </button>
      </Link>
    </div>
  );
};

export default Citizens;
