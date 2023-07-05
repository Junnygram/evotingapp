import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="bg-white h-16">
      <div className="flex w-4/5 mx-auto justify-between items-center h-full">
        <div className="w-8">
          <Image src="/assets/sug.jpeg" width={200} height={100} alt="Logo" />
        </div>
        <div className=" items-center hidden md:flex w-2/5  justify-between ">
          <div className="text-slate-950">Home</div>
          <div className="text-slate-950">About</div>
          <div className="text-slate-950">Candidates</div>
        </div>
      </div>
    </div>
  );
};
