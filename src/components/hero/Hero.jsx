import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTB", "BTC", "SAAS"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-66px] w-full h-screen mx-auto text-center flex flex-col justify-center px-2">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:pt-2">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center py-4">
          <p className="md:text-4xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <div className="md:text-4xl sm:text-4xl text-xl font-bold ml-3">
            <span classname="" ref={el}></span>
          </div>
        </div>
        <p className="lg:w-[70%] md:w-[70%] mx-auto md:text-2xl lg:text-2xl text-lg font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#1db283]">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
