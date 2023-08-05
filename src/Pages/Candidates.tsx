import React, { useState } from 'react';
import CandidateProfile from '../Components/CandidateProfile';

async function getData() {
  try {
    const res = await fetch(
      // 'https://64b7af7521b9aa6eb078ceee.mockapi.io/profile',
      'data.json',
      { next: { revalidate: 10 } }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.log({ error });
  }
}

const Candidates = async () => {
  const [showModal, setShowModal] = useState(false);
  const data = await getData();
  console.log({ data });

  console.log({ data });
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 py-8">
      {data.map((x: any, i: any) => (
        <CandidateProfile
          key={i}
          postTitle={x.position}
          img={x.image}
          name={x.name}
          level={x.level}
          dept={x.dept}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ))}
    </div>
  );
};

export default Candidates;
