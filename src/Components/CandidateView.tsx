import Image from 'next/image';
import React from 'react';
import data from '../data';

export const CandidateView = () => {
  return (
    <div className="w-full h-[20rem] bg-green-500 border-solid border-2 border-emerald-400 relative">
      <Image
        src="/assets/profile.jpeg"
        fill
        // quality={90}
        alt="candidate image"
      />
      <div className="z-1 w-4/5 absolute bottom-6 border-2 border-gray-800 left-2/4 translate-x-[-50%] p-2">
        {data.presidency.map((info) => (
          <>
            {' '}
            <div className="text-gray-200">{info.name}</div>
            <div className="text-gray-200">{info.level}</div>
            <div className="text-gray-200">{info.dept}</div>
          </>
        ))}
      </div>
    </div>
  );
};
