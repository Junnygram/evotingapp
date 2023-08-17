import React from 'react';

type Props = {
  textContent: string;
  isLoading: any;
};
const SubmitButton = ({ textContent, isLoading }: Props) => {
  return (
    <>
      {' '}
      <div>
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-[#d8a642] focus:outline-none focus:bg-gray-600"
          type="submit"
          {...isLoading}
        >
          {textContent}
        </button>
      </div>
    </>
  );
};

export default SubmitButton;
