import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="my-4 " id="#about">
      <div className="w-3/4 mx-auto text-center md:text-4xl text-2xl">
        About
      </div>
      <div className="flex p-4 ">
        <div className="w-2/4 relative ">
          <Image
            alt="voting image"
            src="/assets/voting2.jpeg"
            width={200}
            height={100}
            className="h-full w-full "
          />
          <div className="top-[50%] md:text-3xl left-2 text-white absolute">
            cast your vote Wisely
          </div>
        </div>
        <div className="p-4 flex items-center text-center  md:text-3xl text bg-green-400 w-2/4">
          Welcome to our e-voting app, a modern and secure platform designed to
          revolutionize the way we engage in democratic processes.
          {/* <span className="hidden md:visible">
            At our core, we believe in the power of democracy and the importance
            of active participation. With our e-voting app, we strive to remove
            barriers, making it easier for people to engage in elections,
            referendums, and other decision-making processes that shape their
            communities.{' '}
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default About;
