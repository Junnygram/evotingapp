import React from 'react';
import { HeroSection } from '../Components/HeroSection';
import { SingleCandidateTag } from '../Components/SingleCandidate';
import About from '../Components/About';
import data from '../utils/data.json';

export const Homepage = () => {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <div className="mt-[4rem]">
        <h2 className="text-center my-8 text-black text-4xl font-semibold">
          Candidate Gallery
        </h2>
        <div className="grid  md:grid-cols-3 grid-cols-2 gap-8 py-10 w-4/5 mx-auto">
          <SingleCandidateTag
            data={data.filter((x: any) => x.position == 'SUG President')}
            post="SUG President"
          />
          <SingleCandidateTag
            data={data.filter((x: any) => x.position == 'Vice President')}
            post="Vice President"
          />
          <SingleCandidateTag
            data={data.filter((x: any) => x.position == 'Fin Secretary')}
            post="Fin Secretary"
          />
          <SingleCandidateTag
            data={data.filter((x: any) => x.position == 'Gen Secretary')}
            post="Gen Secretary"
          />
          <SingleCandidateTag
            data={data.filter((x: any) => x.position == 'Social Secretary')}
            post="Social Secretary"
          />
          <SingleCandidateTag
            data={data.filter((x: any) => x.position == 'Treasurer')}
            post="Treasurer"
          />
        </div>
      </div>
      {/* <About /> */}
    </main>
  );
};
