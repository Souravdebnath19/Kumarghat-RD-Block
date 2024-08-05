"use client";

import React, { useState } from "react";
import Filter from "./(component)/Filter";

import Link from "next/link";
import vc from "../data/data3";
import Efilelist from "./(component)/Efilelist";
import kumarghatRDBlock from "../data/data1";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

const FileSearch = () => {
  const [filteredRows, setFilteredRows] = useState<any>({});
  return (
    <div className="px-10 bg-gradient-to-b from-yellow-10">
    <Filter rows={vc as any} setFilteredRows={setFilteredRows} />
    <Efilelist rows={filteredRows} />
  </div>
    // <ClerkProvider>
    //   <SignedOut>
    //     <SignIn routing="hash" />
    //   </SignedOut>
    //   <SignedIn>

    //   </SignedIn>
    // </ClerkProvider>
  );
};

export default FileSearch;
