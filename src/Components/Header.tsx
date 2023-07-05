'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-white h-16">
      <div className="flex w-4/5 mx-auto justify-between items-center h-full">
        <div className="w-8">
          <Image src="/assets/sug.jpeg" width={200} height={100} alt="Logo" />
        </div>

        <div className="block hover:bg-gray-100 hover:text-gray-600 focus:outline-none ">
          {nav ? (
            <AiOutlineClose
              size={25}
              onClick={handleNav}
              className="flex justify-end md:hidden "
            />
          ) : (
            <AiOutlineMenu
              size={25}
              onClick={handleNav}
              className="flex justify-end  md:hidden"
            />
          )}
          {nav ? (
            <div
              className={
                nav
                  ? 'fixed right-6 top-0 w-[60%] h-3/4 my-[4rem] border-r  border-r-gray-900 ease-in-out bg-transparent duration-500'
                  : 'ease-in-out duration-500 fixed right-[-100%]'
              }
            >
              <Link
                onClick={handleNav}
                href="#main"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <AiOutlineClose size={20} />
                <span className="pl-4">Home</span>
              </Link>
              <Link
                onClick={handleNav}
                href="#main"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <AiOutlineClose size={20} />
                <span className="pl-4">About</span>
              </Link>
              <Link
                onClick={handleNav}
                href="#main"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <AiOutlineClose size={20} />
                <span className="pl-4">Candidate</span>
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className=" items-center hidden md:flex w-2/5  justify-between ">
          <Link href={''} className="text-slate-900">
            Home
          </Link>
          <Link href={''} className="text-slate-900">
            About
          </Link>
          <Link href={''} className="text-slate-900">
            Candidates
          </Link>
        </div>
      </div>
    </div>
  );
};
