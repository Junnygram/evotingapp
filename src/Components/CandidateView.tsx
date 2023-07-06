import Image from 'next/image';
import React from 'react';
import data from '../data';
import CandidateCard from './CandidateCard';

export const CandidateView = () => {
  return (
    <CandidateCard
      src={'/assets/profile.jpeg'}
      name={'Adeyemi Ade'}
      level={'400 level'}
      dept={'Computer Science'}
    />
  );
};
