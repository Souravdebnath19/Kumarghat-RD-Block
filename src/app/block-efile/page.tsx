"use client";

import React, { useState } from "react";
import Filter from "./(component)/Filter";

import Link from "next/link";

import Efilelist from "./(component)/Efilelist";
import kumarghatRDBlock from "../data/data2";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

const FileSearch = () => {
  const [filteredRows, setFilteredRows] = useState<any>({});
  return (
    // <ClerkProvider>
    //   <SignedOut>
    //     <SignIn routing="hash" />
    //   </SignedOut>
    //   <SignedIn>

    //   </SignedIn>
    // </ClerkProvider>
    <div className="px-10 bg-gradient-to-b from-yellow-10">
    <Filter
      rows={kumarghatRDBlock as any}
      setFilteredRows={setFilteredRows}
    />
    <Efilelist rows={filteredRows} />
  </div>
  );
};

export default FileSearch;
