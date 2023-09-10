import React from "react";

const Footer = () => {
  return (
    <footer className="h-full flex justify-center items-center flex-col text-center p-4 text-sm">
      <div className="text-center p-8">
        <h1 className="text-3xl font-medium">Contact Us</h1>
        <div className="max-w-[900px] mt-8 mx-auto font-light">
          <p>Phone: +27 21 786 1233</p>
          <p>WhatsApp: +27 60 409 4798</p>
          <p className="font-medium">McFarlane Rd, Simon&apos;s Town, 7995</p>
        </div>
      </div>
      <div>© 2023 Dylan Koevort</div>
    </footer>
  );
};

export default Footer;
