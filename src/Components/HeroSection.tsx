'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <div className="h-[40vh] md:h-[70vh] bg-gray-950 text-white font-bold flex items-center ">
      <div className="w-4/5 mx-auto text-5xl flex  ">
        <div className="w-2/4 my-auto text-xl md:text-5xl   leading-relaxed">
          Welcome to SUG E-voting Portal.
          <div className="text-green-400 md:visible ">
            <h1>where your voice</h1>
            <TypeAnimation
              sequence={[
                ' is heard ', // Types 'One'
                2000, // Waits 2s
                ' and your vote makes a difference!', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
              style={{ fontSize: '0.6em' }}
            />
          </div>
        </div>
        <div className="w-2/4 pl-4 ">
          <Image
            alt="voting image"
            src="/assets/voting1.jpeg"
            width={200}
            height={100}
            className="h-auto w-auto "
          />
        </div>
      </div>
    </div>
  );
};
