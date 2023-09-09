import Navbar from "@/components/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="h-full relative">
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
