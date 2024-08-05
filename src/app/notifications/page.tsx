"use client";
import { useState } from "react";

const page = () => {
  const [documents, setDocuments] = useState([
    {
      title: "Gazette Notification for Panchayat Election Schedule",
      validity: "-",
      downloadUrl:
        "https://drive.google.com/file/d/1wKLM4w_qx-5KmyhjrPg97qg6DfJnswQB/view?usp=drive_link",
    },
    {
      title: "Model Code of Conduct",
      validity: "-",
      downloadUrl:
        "https://drive.google.com/file/d/1sAXQuHp3RRBNkkPxx3YGjYBWiXKB__VB/view?usp=drive_link",
    },
  ]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-5">All Documents</h1>
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-center font-bold">
              Title
            </th>
            <th className="px-4 py-2 bg-gray-200 text-center font-bold">
              Notification
            </th>
            <th className="px-4 py-2 bg-gray-200 text-center font-bold">
              Validity
            </th>
            <th className="px-4 py-2 bg-gray-200 text-center font-bold">
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{document.title}</td>
              <td className="px-4 py-2 border">
                <a href={document.downloadUrl} target="_blank" rel="noreferrer">
                  View
                </a>
              </td>
              <td className="px-4 py-2 border">{document.validity}</td>
              <td className="px-4 py-2 border">
                <a
                  href={document.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default page;
