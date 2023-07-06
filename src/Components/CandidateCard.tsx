import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CandidateProps = {
  src: string;
  name: string;
  level: string;
  dept: string;
};

const CandidateCard = ({ src, name, level, dept }: CandidateProps) => {
  return (
    // <div className="w-full md:h-[20rem] h-[14rem] bg-green-500 border-solid border-2 border-emerald-400 relative">
    //   <Image
    //     src={src}
    //     fill
    //     // quality={90}
    //     alt="candidate image"
    //   />
    //   <div className="z-1 w-4/5 absolute bottom-6 border-2 border-gray-800 left-2/4 translate-x-[-50%] p-2">
    //     <>
    //       {' '}
    //       <div className="text-gray-200">{name}</div>
    //       <div className="text-gray-200">{level}</div>
    //       <div className="text-gray-200">{dept}</div>
    //     </>
    //   </div>
    // </div>

    <div className="w-full md:h-[20rem] h-[14rem]  bg-white border border-gray-200 rounded-lg shadow mx-auto relative ">
      <Link href="#">
        <Image
          src={src}
          fill
          // quality={90}
          alt="candidate image"
        />
      </Link>
      <div className="p-2 md:flex md:flex-col items-center hidden absolute bottom-0 bg-gray-500  ">
        <Link href="#">
          <h5 className="mb-2  font-bold text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <div className="flex flex-col items-center font-normal text-gray-700 ">
          <p>{level}</p>
          <p>{dept}</p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center  px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          View profile
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CandidateCard;
