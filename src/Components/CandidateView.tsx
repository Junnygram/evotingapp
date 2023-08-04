import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const CandidateView = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-[20rem] bg-green-500  relative">
      <Image
        src={data.img}
        layout="fill"
        alt="candidate image"
        className="w-full h-auto object-cover"
      />
      <div className="z-1 w-4/5 h-fit absolute bottom-6 border-2 border-black left-2/4 translate-x-[-50%] p-2 bg-white">
        <div className="text-gray-950">{data.name}</div>
        <div className="text-gray-950">{data.level} Level</div>
        <div className="text-gray-950">{data.dept}</div>
      </div>
    </div>
  );
};
