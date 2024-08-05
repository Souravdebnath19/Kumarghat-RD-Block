"use client";
import Link from "next/link";
import React from "react";
import AboutDropdown from "./AboutDropdown";
import { BrowserRouter, Route } from "react-router-dom";
import Notice from "./Notice";
import Projects from "./Projects";
import Efile from "./Efile";
import RTI from "./RTI";

import Mediagallery from "./Mediagallery";
import Citizens from "./Citizens";
import Grampanchyat from "./Grampanchyat";
import Dropdown from "./Contact";

import { useRouter } from "next/router";
import { useRef } from "react";
import AboutBlock from "./AboutBlock";
import Br from "./Br";
import Contact from "./Contact";

const Menubar = () => {
  return (
    <BrowserRouter>
      <div>
        <section className="bg-blue-600 ">
          <div className="container">
            <nav className="flex">
              <ul id="menu-header-en" className="flex">
                <Link href="/"></Link>
                <li
                  id="menu-item-2658"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex"
                >
                  <a href="" aria-current="page">
                    Home
                  </a>
                </li>
                <Br />
                <li id="menu-item-2486" className="pl-8">
                  <a className="flex">
                    <AboutDropdown
                      scrollToAboutBlock={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  </a>
                </li>
                <Br />
              </ul>

              <li id="menu-item-2829" className="list-none">
                <a className="flex">
                  <Notice />
                </a>
              </li>
              <Br />
              <li className="list-none">
                <a className="flex">
                  <Grampanchyat />
                </a>
              </li>
              <Br />
              <li id="menu-item-2829" className="list-none">
                <a className="flex">
                  <Projects />
                </a>
              </li>

              <Br />
              <li id="menu-item-2829" className="list-none">
                <a className="flex">
                  <Efile />
                </a>
              </li>
              <Br />
              <li id="" className="list-none">
                <a className="flex">
                  <RTI />
                </a>
              </li>
              <Br />
              <li id="menu-item-2829" className="list-none">
                <a className=" font-bold text-black">
                  <Mediagallery />{" "}
                </a>{" "}
              </li>
              <Br />
              <li id="menu-item-2829" className="list-none">
                <a className=" font-bold text-black">
                  <Citizens />{" "}
                </a>{" "}
              </li>
              <Br />
              <li id="menu-item-2829" className="list-none">
                <a className=" font-bold text-black">
                  <Contact />{" "}
                </a>{" "}
              </li>
            </nav>
          </div>
          <hr className="bg-black" />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default Menubar;
