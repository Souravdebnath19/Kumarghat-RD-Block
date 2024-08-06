"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Blockmap = () => {
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/@23.8159962,91.2982016,15z?entry=ttu"
  );

  return (
    <>
      <div className="d-flex container mx-auto pt-4 pb-4">
        <div className="pe-10">
          <h1 className="text-3xl font-bold mb-4">BLOCK MAP</h1>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <Image
                src="/blockmap.jpg"
                alt="Facebook"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-red-700 ">QUICK LINKS</h2>
          <div className="flex">
            <ul className="list-disc text-blue-700">
              <a href="https://tripura.gov.in">
                <li>Tripura State Portal</li>
              </a>
              <a href="https://panchayat.tripura.gov.in">
                <li>R.D.(Panchayat) Department</li>
              </a>
              <a href="https://unakoti.nic.in">
                <li>Unakoti District</li>
              </a>

              <a href="https://trlm.tripura.gov.in">
                <li>TRLM</li>
              </a>
              <a href="https://nrega.nic.in/MGNREGA_new/Nrega_home.aspx">
                <li>MGNREGA</li>
              </a>
              <a href="https://amarsarkar.tripura.gov.in">
                <li>AMAR SARKAR</li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded-md text-center">
              <p className="font-bold">CM HelpLine -</p>
              <p className="text-4xl font-bold">1905</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md text-center">
              <p className="font-bold">Child Helpline -</p>
              <p className="text-4xl font-bold">1098</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md text-center">
              <p className="font-bold">Women Helpline -</p>
              <p className="text-4xl font-bold">1091</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md text-center">
              <p className="font-bold">Disaster Management -</p>
              <p className="text-4xl font-bold">1077</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md text-center">
              <p className="font-bold">Crime Stopper -</p>
              <p className="text-4xl font-bold">1090</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md text-center">
              <p className="font-bold">Ambulance -</p>
              <p className="text-4xl font-bold">102</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blockmap;
