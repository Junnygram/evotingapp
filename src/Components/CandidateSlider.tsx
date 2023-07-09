'use client';

import React from 'react';
import { CandidateView } from './CandidateView';
import Slider from 'react-slick';

export const CandidateSlider = ({ data }: { data: any }) => {
  const settings = {
    dot: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="h-[20rem] w-fulls">
      <Slider {...settings}>
        {data
          .filter((x: any) => x.post == 'President')
          .map((x: any) => (
            <CandidateView key={x.id} data={x} />
          ))}
      </Slider>
    </div>
  );
};
