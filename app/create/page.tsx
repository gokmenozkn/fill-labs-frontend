'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormData } from '@/types/User';
import UserApi from '@/utils/api';
import FormView from '@/components/FormView';

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
      
      <FormView
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        page='Create'
        formData={formData}
      />
    </>
  );
}
