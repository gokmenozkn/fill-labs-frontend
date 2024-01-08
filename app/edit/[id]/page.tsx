'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormData } from '@/types/User';
import UserApi from '@/utils/api';
import FormView from '@/components/FormView';
import { toast, ToastContainer } from 'react-toastify';

const userApi = new UserApi();

export default function Page({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    about: '',
  });
  const id = params.id;
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      try {
        const data = await userApi.getUser(id);
        console.log(data);
        setFormData({
          name: data.name,
          email: data.email,
          about: data.about,
        });
      } catch (e) {
        console.log(e);
      }
    }

    getUser();
  }, [id]);

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
      const response = await userApi.updateUser(id, formData);

      console.log('success:', response);

      // show success message
      toast.success('User updated successfully!', {
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
        formData={formData}
        page='Edit'
      />
    </>
  );
}
