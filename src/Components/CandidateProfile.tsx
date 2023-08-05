'use client';
import React, { useState } from 'react';
import Image from 'next/image';
interface Icandidate {
  postTitle: string;
  img: string;
  name: string;
  level: string;
  dept: string;
  showModal: boolean;
  setShowModal: any;
}

const CandidateProfile = ({
  postTitle,
  img,
  name,
  level,
  dept,
  showModal,
  setShowModal,
}: Icandidate) => {
  const [voted, setVoted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleVoteClick = () => {
    // Perform any vote-related logic here, if needed.
    setVoted(true);
    setIsButtonDisabled(true);
  };

  return (
    <div>
      <div className="max-w-sm my-6 mx-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-White dark:border-gray-700">
        <div className="w-full p-6 bg-white shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-black">
            {postTitle}
          </h1>
        </div>
        <div className="h-[20rem] overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={img}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {name}
            </h5>
          </a>
          <p className="mb-2 font-normal text-gray-700 dark:text-black">
            {level} Level
          </p>
          <p className="mb-2 font-normal text-gray-700 dark:text-black">
            {dept}
          </p>
          <div className="flex justify-between gap-4">
            <a
              href="/viewprofile"
              className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
            >
              View Profile
            </a>
            <button
              className="flex justify-center items-center px-3 py-2 text-sm font-medium w-1/2 text-white bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-black"
              onClick={handleVoteClick}
              disabled={isButtonDisabled}
            >
              Vote
            </button>
          </div>
          {showModal && voted ? (
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Voted
                </h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-red-500">You Can Only Vote Once</p>
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                    onClick={() => setShowModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
