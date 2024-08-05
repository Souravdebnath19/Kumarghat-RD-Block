"use client";
import { useState } from "react";
import { FaMap, FaUsers, FaBuilding, FaCircle } from "react-icons/fa";

export default function Home() {
  const [districtData, setDistrictData] = useState({
    area: "267 sq. km sq km",
    population: "89,190",
    GramPanchyat: 26,
    Villagecouncil: 9,

    PoliceStation: 2,
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">BLOCK AT A GLANCE</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <FaMap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Area:</h2>
            <p>{districtData.area}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <FaUsers className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Population-2011:</h2>
            <p>{districtData.population}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <FaBuilding className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Gram Panchyat:</h2>
            <p>{districtData.GramPanchyat}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <FaBuilding className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Village Council:</h2>
            <p>{districtData.Villagecouncil}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <FaCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Police Station:</h2>
            <p>{districtData.PoliceStation}</p>
          </div>
        </div>

        <div className="flex items-center"></div>
      </div>
    </div>
  );
}
