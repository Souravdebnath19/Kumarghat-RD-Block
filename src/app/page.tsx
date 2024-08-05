"use client";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Menubar from "./component/Menubar";
import Body from "./component/Body";
import CarouselsBanner from "./component/Carousel";
import Hip from "./component/Hip";
import Blockmap from "./component/Blockmap";
import AboutBlock from "./component/AboutBlock";
import Link from "next/link";

import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className="px-20">
      <Header />
      <Hero />
      <Menubar />
      <hr />
      <CarouselsBanner />
      <hr />

      <Body />
      <hr />
      <Hip />
      <hr />
      <Blockmap />
    </div>
  );
}
