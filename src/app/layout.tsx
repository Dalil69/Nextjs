import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar /> {/* Ajoutez la Sidebar ici */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={inter.className}>{children}</div>;
};

export default RootLayout;
