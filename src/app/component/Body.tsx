"use client";
import Image from "next/image";
import AboutBlock from "./AboutBlock";

export default function Home() {
  return (
    <div className="flex justify-between place-items-center mb-8 w-[85vw]">
      <AboutBlock />

      <div className="flex bg-gray-100 rounded ">
        <Image src="/img10.jpg" alt="Facebook" width={150} height={250} />
        <div className="flex-col">
          <h2 className="text-xl font-bold mb-2 pl-4">
            Dr. Sudip Bhowmik, TCS-Gr II
          </h2>
          <p className="text-gray-600 pl-4">Block Development Officer</p>
          <div className="flex items-center mt-2 pl-4">
            <a href="https://www.facebook.com/bdokgt" className="mr-2">
              <Image src="/img7.jpg" alt="Facebook" width={30} height={30} />
            </a>
            <a href="https://x.com/bdokgt" className="mr-2">
              <Image src="/img8.jpg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="www.gmail.com" className="mr-2">
              <Image src="/img9.jpg" alt="Contact" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
