'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';

import { usePathname } from 'next/navigation';

export const MenuItems = ({ name, url }: { name: string; url: string }) => {
  const pathname = usePathname();
  //console.log(pathname);
  return (
    <Link href={url} passHref>
      <div
        className={` hover:text-[#d8a642] ${
          pathname == url ? 'text-[#d8a642]' : 'text-slate-950'
        } `}
      >
        {name}
      </div>
    </Link>
  );
};

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="h-16 ">
      <div className="flex w-4/5 mx-auto justify-between items-center h-full">
        <div className="w-8">
          <Image src="/assets/sug.jpeg" width={200} height={100} alt="Logo" />
        </div>

        <div className="block  md:hidden p-2  hover:bg-gray-200 text-black ">
          {nav ? (
            ''
          ) : (
            // <AiOutlineClose
            //   size={25}
            //   onClick={handleNav}
            //   className="flex justify-end "
            // />
            <AiOutlineMenu
              size={25}
              onClick={handleNav}
              className="flex justify-end "
            />
          )}
          {nav ? (
            <div
              className={
                nav
                  ? 'fixed z-10 right-2 bg-slate-400 top-0 w-[60%] h-screen py-4 ease-in-out  transition  delay-200 duration-500'
                  : 'ease-in-out duration-500 fixed right-[-100%]'
              }
            >
              <div className="w-3/4 mx-auto my-4 flex justify-end    ">
                {' '}
                <AiOutlineClose
                  size={25}
                  onClick={handleNav}
                  className="flex justify-end  hover:bg-gray-200 "
                />
              </div>
              <div className="my-8 flex flex-col gap-2">
                {' '}
                <Link
                  onClick={handleNav}
                  href="/"
                  className="w-[75%] mx-auto flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <AiFillHome size={20} />
                  <span className="pl-4 ">Home</span>
                </Link>
                <Link
                  onClick={handleNav}
                  href="/about"
                  className="w-[75%] mx-auto flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <FcAbout size={20} />
                  <span className="pl-4">About</span>
                </Link>
                <Link
                  onClick={handleNav}
                  href="/candidate"
                  className="w-[75%] flex mx-auto justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <BsFillPersonFill size={20} />
                  <span className="pl-4">Candidate</span>
                </Link>
                <Link
                  onClick={handleNav}
                  href="/login"
                  className="w-[75%] flex mx-auto justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <BiLogIn size={20} />
                  <span className="pl-4">Login</span>
                </Link>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className=" items-center hidden md:flex w-2/5  justify-between  ">
          <MenuItems name="Home" url="/" />
          <MenuItems name="About" url="/about" />
          <MenuItems name="Candidates" url="/candidates" />
          <MenuItems name="Login" url="/login" />
        </div>
      </div>
    </div>
  );
};
