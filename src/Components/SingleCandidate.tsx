import React from 'react';
import { CandidateSlider } from './CandidateSlider';

export const SingleCandidateTag = ({
  post,
  data,
}: {
  post: string;
  data: any;
}) => {
  return (
    <div>
      <div className="relative border-solid border-2 border-black h-14 w-3/4 mb-8 group">
        <div className="bg-black px-6 py-2 absolute top-2 left-3 h-full w-full flex items-center text-white text-2xl">
          {post}
        </div>
      </div>
      <CandidateSlider data={data} />
    </div>
  );
};
