import React, { useState } from "react";

const Testomonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "This product completely exceeded my expectations. Highly recommended!",
      author: "Alice Johnson",
    },
    {
      quote: "Amazing service and support! I felt valued as a customer.",
      author: "Michael Smith",
    },
    {
      quote:
        "A game-changer for our team. Efficiency and quality improved instantly.",
      author: "Sofia Martinez",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-20">
      <div className="max-w-xl bg-slate-950/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center">
        <p className="text-lg md:text-xl text-white italic mb-6">
          "{testimonials[currentIndex].quote}"
        </p>

        <h3 className="text-md md:text-lg font-semibold text-emerald-400 mb-6">
          - {testimonials[currentIndex].author}
        </h3>

        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="px-5 py-2 rounded-full bg-indigo-500 text-white
                       hover:bg-indigo-600 active:scale-95 transition-all duration-200 shadow-md"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-5 py-2 rounded-full bg-emerald-500 text-white
                       hover:bg-emerald-600 active:scale-95 transition-all duration-200 shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testomonials;
