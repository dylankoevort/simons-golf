import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="h-full relative">
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default HomeLayout;
