"use client";
import { useState } from "react";

const data = [
  {
    siNo: 1,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "Darchawi",
    vcLgCode: 253942,
    pradhan: "abc",
  },
  {
    siNo: 2,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "Demdum",
    vcLgCode: 253943,
    pradhan: "abc",
  },
  {
    siNo: 3,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "Deo-Velly",
    vcLgCode: 253944,
    pradhan: "abc",
  },
  {
    siNo: 4,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "East Betchara",
    vcLgCode: 253945,
    pradhan: "abc",
  },
  {
    siNo: 5,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "Fatikcherre Dasarath Deb",
    vcLgCode: 273372,
    pradhan: "abc",
  },
  {
    siNo: 6,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "Juricherra",
    vcLgCode: 253946,
    pradhan: "abc",
  },
  {
    siNo: 7,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "Rajkandi",
    vcLgCode: 253947,
    pradhan: "abc",
  },
  {
    siNo: 8,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "Saidacherra",
    vcLgCode: 253948,
    pradhan: "abc",
  },
  {
    siNo: 9,
    district: "Unakoti Tripura",
    districtLgCode: 240,
    block: "Kumarghat",
    blockLgCode: 6911,
    villagecommittees: "South Unakoti",
    vcLgCode: 253941,
    pradhan: "abc",
  },
];

const GPList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter((item) => {
    return (
      item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.villagecommittees.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">List of Village Committies</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Block or Village Committees"
          className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="w-full text-left table-auto">
        <thead>
          <tr>
            <th className="bg-gray-200 text-gray-700 px-4 py-3">SI No</th>
            <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Name of District
            </th>
            {/* <th className="bg-gray-200 text-gray-700 px-4 py-3">
              District LGD Code
            </th> */}
            <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Name of Block
            </th>
            {/* <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Block LGD Code
            </th> */}
            <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Name of Village Committes
            </th>
            <th className="bg-gray-200 text-gray-700 px-4 py-3">VC LGD Code</th>
            <th className="bg-gray-200 text-gray-700 px-4 py-3">
              Name of Pradhan
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.siNo}>
              <td className="border px-4 py-2">{item.siNo}</td>
              <td className="border px-4 py-2">{item.district}</td>
              {/* <td className="border px-4 py-2">{item.districtLgCode}</td> */}
              <td className="border px-4 py-2">{item.block}</td>
              {/* <td className="border px-4 py-2">{item.blockLgCode}</td> */}
              <td className="border px-4 py-2">{item.villagecommittees}</td>
              <td className="border px-4 py-2">{item.vcLgCode}</td>
              <td className="border px-4 py-2">{item.pradhan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GPList;
