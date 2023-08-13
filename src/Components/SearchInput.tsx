import { useRouter } from 'next/router';
import React, { useState } from 'react';
import data from '../../utils/data.json';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const position = [
  { id: 1, pos: 'Filter Position' },
  { id: 2, pos: 'SUG President' },
  { id: 3, pos: 'Vice President' },
  { id: 4, pos: 'Fin Secretary' },
  { id: 5, pos: 'Gen Secretary' },
  { id: 6, pos: 'Soc. Secretary' },
  { id: 7, pos: 'Treasurer  ' },
];
const SearchInput = () => {
  const [drop, SetDrop] = useState('Filter Position');

  // const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e: any) => {
    e.preventDefault();
    // navigate(query ? `/search/?query=${query}` : '/search');
  };
  return (
    <div className="">
      <div className="flex gap-4">
        <div className="w-[55%] md:[35%]">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {position.map((x) => (
              //eslint-disable-next-line react/jsx-key
              <>
                <option key={x.id}> {x.pos}</option>
              </>
            ))}
          </select>
        </div>
        <div className="hidden md:flex w-full">
          <div className=" relative w-full">
            <AiOutlineSearch
              size={45}
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 "
              onSubmit={submitHandler}
            />
            <input
              type="search"
              onChange={(e) => setQuery(e.target.value)}
              className="block p-2.5 w-full rounded-md z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300   dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Candidate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
