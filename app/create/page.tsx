'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormData } from '@/types/User';
import UserApi from '@/utils/api';

const userApi = new UserApi();

export default function Create() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    about: '',
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await userApi.createUser(formData);

      console.log('success:', response);
      router.push('/');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      {/* Back button */}
      <div className='py-4 max-w-2xl mx-auto'>
        <Link href='/' className='text-blue-600 hover:text-blue-400'>
          {'<'} Back
        </Link>
      </div>

      <div className='max-w-md mx-auto bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Create User</h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-600 text-sm font-medium mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-600 text-sm font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-600 text-sm font-medium mb-2'>
              About
            </label>
            <textarea
              id='about'
              name='about'
              rows={4}
              value={formData.about}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none'
              required
            ></textarea>
          </div>

          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}
