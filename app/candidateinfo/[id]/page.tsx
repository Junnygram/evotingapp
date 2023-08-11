import ViewProfile from '@/src/Pages/ViewProfile';
import data from '../../../utils/data.json';
import React from 'react';
import { useRouter } from 'next/router';

export default function Page({ params: { id } }: any) {
  const candidate = data.find((x) => x.id === Number(id));
  console.log(candidate);
  //const candidate = data.find((x) => x.id === Number(id));
  if (!candidate) {
    return (
      <div className="flex items-center justify-center h-screen">
        Candidate bio not available
      </div>
    );
  }
  return (
    <div>
      {' '}
      <ViewProfile
        src={candidate?.img}
        name={candidate?.name}
        position={candidate?.position}
        level={candidate?.level}
      />
    </div>
  );
}
