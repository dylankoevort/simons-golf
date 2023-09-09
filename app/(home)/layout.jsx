import React from "react";
import Navbar from "@/components/navbar";

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
