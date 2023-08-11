'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ViewProfile = ({ src, name, position, level }: any) => {
  const [voted, setVoted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleVoteClick = () => {
    // Perform any vote-related logic here, if needed.
    setVoted(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBackClick = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-black">
        <div className="flex justify-center items-end text-center min-h-screen sm:block">
          <div className="inline-block text-left bg-white rounded-lg overflow-hidden align-bottom transition-allshadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div className="items-left w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
              <div className="grid grid-cols-1 items-left">
                <div className="mt-4 mr-auto mb-4 ml-auto items-left bg-white max-w-lg">
                  <div className="flex flex-col items-left pt-6 pr-6 pb-6 pl-6">
                    <Image
                      src={src}
                      width={24}
                      height={24}
                      className="rounded-full w-16 h-16"
                      alt={''}
                    />
                    <p className="mt-10 text-2xl font-semibold leading-none text-black tracking-tighter lg:text-3xl">
                      {name}
                    </p>

                    <h3 className="fas fa-briefcase mr-2 text-semibold text-lg text-black">
                      {position}
                    </h3>

                    <h3 className="fas fa-briefcase mr-2 text-semibold text-lg text-black">
                      Petroleum Engineering
                    </h3>

                    <h3 className="fas fa-briefcase mr-2 text-bold text-lg text-black">
                      {level}
                    </h3>

                    <div className=" mt-10 text-lg font-semibold leading-none text-black tracking-tighter lg:text-lg mb-2 text-blueGray-600">
                      <h2 className="fas fa-university mr-2 text-lg text-blueGray-400"></h2>
                      About Me
                    </div>
                    <p className="mt-2 text-base text-left leading-relaxed text-black">
                      My name David Adeleke, a distinguished academic leader and
                      a visionary candidate running for the position of an SUG
                      President at the University Of Bells. With a profound
                      commitment to excellence in higher education and a passion
                      for fostering a vibrant learning community, bringing
                      wealth of experience, innovative ideas, and a deep
                      understanding of the evolving landscape of higher
                      education. Education and Professional Background: I am a
                      500 Level student studing Petroleum Engineering. I have
                      dedicated my career to the advancement of academia.
                    </p>
                    <div className=" mt-10 text-lg font-semibold leading-none text-black tracking-tighter lg:text-lg mb-2 text-blueGray-600">
                      <h2 className="fas fa-university mr-2 text-lg text-blueGray-400"></h2>
                      Manifesto
                    </div>
                    <p className="mt-2 text-base text-left leading-relaxed text-black">
                      <span>Vision for University Of Bells:</span> My vision for
                      University Of Bells is centered around academic
                      excellence, student empowerment, and community engagement.
                      I envision a university that embraces interdisciplinary
                      collaboration, embraces emerging technologies, and
                      prepares students for the challenges of the future job
                      market. Sarah firmly believes in the importance of a
                      well-rounded education that combines rigorous academic
                      programs with practical experiences, internships, and
                      global learning opportunities. Key Priorities: 1.
                      Enhancing Academic Programs: My aim is to strengthen
                      existing academic programs and develop new
                      interdisciplinary initiatives that align with emerging
                      fields and industry demands. She believes in fostering a
                      culture of innovation and creativity, encouraging faculty
                      to engage in cutting-edge research and scholarship. 2.
                      Student Success and Engagement: I am deeply committed to
                      promoting student success and engagement. My plans is to
                      implement comprehensive support services, mentorship
                      programs, and career development resources to ensure that
                      students have the necessary tools and guidance to thrive
                      academically and personally. 3. Diversity and Inclusion:
                      Recognizing the importance of diversity and inclusion, I
                      am is dedicated to creating a campus environment the
                      celebrates differences and fosters an inclusive community.
                      I would implement policies and initiatives that promote
                      diversity at all levels of the university and ensure equal
                      opportunities for students and faculty from all
                      backgrounds.
                    </p>

                    <div className="w-full gap-4 mt-6 flex justify-between">
                      <button
                        className="text-center items-center justify-center w-full h-10 pt-4 pr-10 pb-9 pl-10 text-base
                    font-medium text-white bg-gray-700 rounded-xl transition duration-500 ease-in-out transform
                    hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-"
                        onClick={handleVoteClick}
                      >
                        Vote
                      </button>
                      {voted && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                          <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-2xl font-semibold text-center">
                              Voted!
                            </p>
                            <button
                              className="mt-4 text-center w-full h-10 text-base font-medium text-white bg-gray-700 rounded-xl
                transition duration-500 ease-in-out transform hover:bg-black focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-"
                              onClick={() => setVoted(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                      <button
                        className="text-center items-center justify-center w-full h-10 pt-4 pr-10 pb-9 pl-10 text-base
                    font-medium text-white bg-gray-700 rounded-xl transition duration-500 ease-in-out transform
                    hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-"
                        onClick={handleVoteClick}
                      >
                        <a href="/candidates">Back</a>
                      </button>
                      {showModal ? (
                        <div className="fixed inset-0 flex items-center justify-center mx-auto mt-10 p-5 border h-80 w-96 shadow-lg rounded-md bg-white">
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
                              <p className="text-sm text-red-500">
                                You Can Only Vote Once
                              </p>
                            </div>
                            <div className="items-center px-4 py-3">
                              <button
                                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                                onClick={handleVoteClick}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
