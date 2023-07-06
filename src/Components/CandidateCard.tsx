import React from 'react';
import Image from 'next/image';
import { type } from 'os';
type CandidateProps = {
  src: string;
  name: string;
  level: string;
  dept: string;
};

const CandidateCard = ({ src, name, level, dept }: CandidateProps) => {
  return (
    <div className="w-full md:h-[20rem] h-[14rem] bg-green-500 border-solid border-2 border-emerald-400 relative">
      <Image
        src={src}
        fill
        // quality={90}
        alt="candidate image"
      />
      <div className="z-1 w-4/5 absolute bottom-6 border-2 border-gray-800 left-2/4 translate-x-[-50%] p-2">
        <>
          {' '}
          <div className="text-gray-200">{name}</div>
          <div className="text-gray-200">{level}</div>
          <div className="text-gray-200">{dept}</div>
        </>
      </div>
    </div>
  );
};

export default CandidateCard;
