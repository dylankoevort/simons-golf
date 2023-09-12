import { faqs } from "@/constants";
import React from "react";

const Faq = () => {
  return (
    <div className="h-full">
      <div className="w-full flex justify-center items-center flex-col max-w-[900px] mx-auto p-8 mt-8">
        <h1 className="text-3xl font-medium">FAQ</h1>
        <p className="mt-8 text-center">
          Looking for answers to your questions?
        </p>
        <div className="mt-8">
          {faqs.map((faq) => (
            <div className="border rounded-xl p-8 my-4">
              <h3 className="text-lg font-bold">{faq.question}</h3>
              <p className="mt-4">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
