import React from 'react';
import Image from 'next/image';
export const HeroSection = () => {
  return (
    <div className="h-[40vh] md:h-[70vh] bg-gray-950 text-white font-bold flex items-center ">
      <div className="w-4/5 mx-auto text-5xl flex  ">
        <div className="w-2/4 my-auto text-2xl md:text-5xl   leading-relaxed">
          Welcome to Harmonics SUG E-voting Portal
        </div>
        <div className="w-2/4 pl-4 ">
          <Image
            alt="voting image"
            src="/assets/voting1.jpeg"
            width={200}
            height={100}
            className="h-full w-full "
          />
        </div>
      </div>
    </div>
  );
};
