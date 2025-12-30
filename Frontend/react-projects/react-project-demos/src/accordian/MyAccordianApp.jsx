import React from "react";
import accordionData from "./accordianData";
import Accordian from "./Accordian";

const MyAccordianApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-10">
      <h1 className="text-3xl md:text-4xl text-center text-white font-bold mb-8">
        Frequently Asked Questions
      </h1>
      {accordionData.map((accordian, index) => (
        <Accordian
          key={index}
          title={accordian.title}
          content={accordian.content}
        />
      ))}
    </div>
  );
};

export default MyAccordianApp;
