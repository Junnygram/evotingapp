'use client';
import React, { useState } from 'react';

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    message: '',
    position: '',
    dept: '',
    level: '',
  });

  const [formSuccessMessage, setFormSuccessMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // We don't want the page to refresh
    e.preventDefault();
    setIsLoading(true);
    console.log({ isLoading });

    const formURL = 'https://www.formbackend.com/f/aa6d541dbddfeb69';
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: 'POST',
      body: data,
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: '',
          email: '',
          phonenumber: '',
          message: '',
          position: '',
          dept: '',
          level: '',
        });
        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
        setIsLoading(false);
      });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6  my-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-[#d8a642]">
          Register To Contest
        </h1>
        {formSuccess ? (
          <div>{formSuccessMessage}</div>
        ) : (
          <form className="mt-6" onSubmit={submitForm}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">
                Name
              </label>
              <input
                type="name"
                name="name"
                onChange={handleInput}
                value={formData.name}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={formData.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-800"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phonenumber"
                onChange={handleInput}
                value={formData.phonenumber}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-800">
                Level
              </label>
              <input
                type="text"
                name="level"
                onChange={handleInput}
                value={formData.level}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-800">
                Dept
              </label>
              <input
                type="text"
                name="dept"
                onChange={handleInput}
                value={formData.dept}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-800">
                Position
              </label>
              <input
                type="text"
                name="position"
                onChange={handleInput}
                value={formData.position}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-800">
                Manifesto
              </label>
              <textarea
                name="message"
                onChange={handleInput}
                value={formData.message}
                className="px-4 py-2 mt-2 text-gray-700 w-full bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="MyTextarea"
                rows={10}
              ></textarea>
            </div>
            <div className="mb-2">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-[#d8a642] focus:outline-none focus:bg-gray-600"
              >
                {isLoading ? 'please wait' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CandidateForm;
