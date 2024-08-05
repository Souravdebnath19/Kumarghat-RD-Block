"use client";
import Link from "next/link";
import { useState } from "react";

function Contact() {
  return (
    <div className="relative z-10 inline-block text-center">
      <Link href="/contact">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex">
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default Contact;
