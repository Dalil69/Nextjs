import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar /> {/* Ajoutez la Sidebar ici */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>{children}</div>
  );
}


