import Image from "next/image";
import React from "react";

const DistrictOfficers = () => {
  const officers = [
    {
      profilePicture: "/images/profile1.png",
      name: "Dr. SUDIP BHOWMIK, TCS Gr-II",
      designation: "Block Development Officer",
      email: "kgt[dot]nrega[at]gmail[dot]com",
      phone: "8974306046",
      fax: null,
      roomNo: null,
    },
    {
      profilePicture: "/images/profile2.png",
      name: "Shri Sunit Kumar Murasingh, TCS Gr-II",
      designation: "Addl. Block Development Officer",
      email: "kgt[dot]nrega[at]gmail[dot]com",
      phone: "8732890817",
      fax: null,
      roomNo: null,
    },
    {
      profilePicture: "/images/profile3.jpg",
      name: "Shri Dipankar Chakraborty, ",
      designation: "Panchyat Officer",
      email: "kgt[dot]nrega[at]gmail[dot]com",
      phone: "8413999035",
      fax: null,
      roomNo: null,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">BLOCK OFFICERS</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold">
              Profile Picture
            </th>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold">Name</th>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold">
              Designation
            </th>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold">Email</th>
            {/* <th className="px-4 py-2 bg-gray-200 text-left font-bold">Address</th> */}
            <th className="px-4 py-2 bg-gray-200 text-left font-bold">Phone</th>
            {/* <th className="px-4 py-2 bg-gray-200 text-left font-bold">Fax</th> */}
            {/* <th className="px-4 py-2 bg-gray-200 text-left font-bold">
              Room No
            </th> */}
          </tr>
        </thead>
        <tbody>
          {officers.map((officer) => (
            <tr key={officer.name}>
              <td className="px-4 py-4 border">
                <Image
                  src={officer.profilePicture}
                  alt={officer.name}
                  width={100}
                  height={100}
                />
              </td>
              <td className="px-4 py-2 border">{officer.name}</td>
              <td className="px-4 py-2 border">{officer.designation}</td>
              <td className="px-4 py-2 border">{officer.email}</td>
              {/* <td className="px-4 py-2 border">{officer.address}</td> */}
              <td className="px-4 py-2 border">{officer.phone}</td>
              {/* <td className="px-4 py-2 border">{officer.fax}</td>
              <td className="px-4 py-2 border">{officer.roomNo}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistrictOfficers;
