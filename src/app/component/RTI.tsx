import Link from "next/link";

const RTI = () => {
  return (
    <div className="relative inline-block text-left">
      <Link href="/rti">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex">
          RTI
        </button>
      </Link>
    </div>
  );
};

export default RTI;
