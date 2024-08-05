import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Online RTI Information System
      </h1>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="text-red-500 font-medium">
          Please do not file RTI application/first appeal through this portal
          for Departments/Public Authorities under Central Government or other
          State Governments. If filed, the application would be returned without
          refund of the fee amount.
        </p>
      </div>
      <div className="flex">
        <div className="p-4 rounded-md bg-gray-100 mt-8">
          <p className="text-wrap">
            This is a portal to file RTI application/first appeal online along
            with payment gateway. Fee payment can be made through Net Banking.
            Through this portal RTI application/first appeal can be filed by
            Indian Citizen only for the Departments/Public Authorities of the
            Govt. of Tripura
          </p>
          <p className="font-bold">
            Please read instructions carefully while submitting the RTI
            application/first appeal.
          </p>
        </div>

        <Image src="/rti.jpg" alt="RTI" width={500} height={400} />
      </div>
    </div>
  );
};

export default page;
