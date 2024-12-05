import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

const TopNavbar = () => {
  return (
    <header className="bg-blue-900 h-12 w-full flex justify-between text-white px-10 items-center">
      <div className=" flex items-center">
        <Link href={"/"}>
          <TiHome className="text size-8" />
        </Link>
        <span className="px-4 font-bold">
          EFMS  (Electronics File Management System)
        </span>
      </div>
      <div className="flex justify-between text-white bg-white rounded py-1 px-2">
        <UserButton showName />
      </div>
    </header>
  );
};

export default TopNavbar;
