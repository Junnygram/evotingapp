'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { headers } from 'next/dist/client/components/headers';
import { useRouter } from 'next/navigation';
YupPassword(yup);

const validation = yup.object().shape({
  name: yup.string().required(),
  matric: yup
    .string()
    .min(4, 'must be at least 4 characters long')
    .email()
    .required(),
  email: yup.string().email().required(),
  password: yup.string().password(),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
    matric: '',
    password: '',
  });

  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm({
  //   resolver: yupResolver(validation),
  //   mode: 'all',
  // });

  const registerUser = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });
      if (response.ok) {
        const userInfo = await response.json();
        console.log(userInfo);
        toast.success('You have successfully created an account');
        router.push('/login');
      } else {
        const errorMessage = await response.text();
        toast.error(errorMessage); // Display the error message as a toast
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6  my-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-green-400">
          Register To Vote
        </h1>
        {/* <form className="mt-6" onSubmit={handleSubmit(registerUser)}> */}
        <form className="mt-6" onSubmit={registerUser}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              type="name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-800"
            >
              Matric Number
            </label>
            <input
              id="matric"
              name="matric"
              type="number"
              autoComplete="matric"
              required
              value={data.matric}
              onChange={(e) => setData({ ...data, matric: e.target.value })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-[#d8a642] focus:outline-none focus:bg-gray-600"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-green-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
