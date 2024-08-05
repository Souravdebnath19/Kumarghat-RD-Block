"use client";

import React, { useState } from "react";
import Filter from "./(component)/Filter";
import DataTable from "./(component)/DataTable";
import Link from "next/link";
import Grampanchyat from "../data/data1";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

const FileSearch = () => {
  const [filteredRows, setFilteredRows] = useState<any>({});
  return (
    <div className="px-10 bg-gradient-to-b from-yellow-10">
    <Filter
      rows={Grampanchyat as any}
      setFilteredRows={setFilteredRows}
    />
    <DataTable rows={filteredRows} />
  </div>
    // <ClerkProvider>
    //   <SignedOut>
    //     <SignIn routing="hash" />
    //   </SignedOut>
    //   <SignedIn>
    //     <div className="px-10 bg-gradient-to-b from-yellow-10">
    //       <Filter
    //         rows={Grampanchyat as any}
    //         setFilteredRows={setFilteredRows}
    //       />
    //       <DataTable rows={filteredRows} />
    //     </div>
    //   </SignedIn>
    // </ClerkProvider>
  );
};

export default FileSearch;
