import React, { useState } from 'react';
import data from '../../utils/data.json';
import CandidateProfile from '../Components/CandidateProfile';
import SearchInput from '../Components/SearchInput';
// async function getData() {
//   try {
//     const res = await fetch(
//       // 'https://64b7af7521b9aa6eb078ceee.mockapi.io/profile',
//       'data.json',
//       { next: { revalidate: 10 } }
//     );
//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     return res.json();
//   } catch (error) {
//     console.log({ error });
//   }
// }

const Candidates = () => {
  const handleSearch = (query: string) => {
    // Implement your search logic here
    console.log('Search query:', query);
    // For example, you could fetch search results from an API based on the query
  };
  const [showModal, setShowModal] = useState(false);
  console.log({ data });

  return (
    <div>
      <div className="w-[90%] mx-auto mt-4">
        <SearchInput />
      </div>
      <div className="w-[90%] mx-auto grid md:grid-cols-3 grid-cols-2 gap-2 py-4">
        {data.map((x: any, i: any) => (
          <CandidateProfile
            key={i}
            id={x.id}
            postTitle={x.position}
            img={x.img}
            name={x.name}
            level={x.level}
            dept={x.dept}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ))}
      </div>
    </div>
  );
};

export default Candidates;
