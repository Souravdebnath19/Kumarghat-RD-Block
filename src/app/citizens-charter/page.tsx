export default function DownloadTable() {
  return (
    <div className="container h-[400px] mx-auto mt-10">
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-800 text-white">Title</th>
            <th className="px-4 py-2 bg-gray-800 text-white">
              Download / View
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">
              Citizen Centric Activities or Services of RD (Panchayat)
              Department
            </td>
            <td className="px-4 py-2">
              <button className="bg-blue-800 text-white px-4 py-2 rounded">
                <a
                  href="https://panchayat.tripura.gov.in/sites/default/files/Citizen%20Services%20of%20RD%20Panchayat%20Department.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-500 hover:text-grey-700"
                >
                  Download
                </a>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
}
