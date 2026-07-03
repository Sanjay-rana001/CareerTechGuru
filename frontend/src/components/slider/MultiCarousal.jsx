import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MultiCarousal = ({ children }) => {
  const scrollRef = useRef(null);

  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="z-100 py-2 hidden w-full sm:flex">
      <div className="justify-left md:justify-left container mx-auto flex px-6 lg:justify-center">
        <span
          onClick={slideLeft}
          className="flex w-auto cursor-pointer self-center pr-1"
        >
          <FaAngleLeft size={20} color={"white"} />
        </span>
        <div
          ref={scrollRef}
          className="relative inline-block h-full w-full items-center gap-4 overflow-x-auto scroll-smooth whitespace-nowrap py-2 text-sm font-medium lg:flex lg:justify-between no-scrollbar"
        >
          {children}
        </div>
        <span
          onClick={slideRight}
          className="flex w-auto cursor-pointer self-center pl-1"
        >
          <FaAngleRight size={20} color={"white"} />
        </span>
      </div>
    </div>
  );
};

export default MultiCarousal;
