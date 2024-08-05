import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "./component/TopNavbar";

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EFMS(Electronics File Management System)",
  description: "EFMS(Electronics File Management System) Kumarghat Block",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* <SignedOut>
            <SignIn routing="hash" />
        </SignedOut> */}
        {/* <SignedIn> */}
          <TopNavbar />
          {children}
          <Footer />
        {/* </SignedIn> */}
      </body>
    </html>
    </ClerkProvider>
  );
}
