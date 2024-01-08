'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormData } from '@/types/User';
import UserApi from '@/utils/api';
import FormView from '@/components/FormView';
import { toast, ToastContainer } from 'react-toastify';

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

      // show success message
      toast.success('User created successfully!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      // redirect to home page after a second
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      toast.error('Something went wrong!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        closeOnClick: true,
        theme: 'colored',
      });
      console.log('Error:', error);
    }
  };

  return (
    <>
      <ToastContainer />

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
