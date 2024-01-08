'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormData } from '@/types/User';
import UserApi from '@/utils/api';
import FormView from '@/components/FormView';

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
        const res = await axios.get(`http://localhost:8080/users/${id}`);
        console.log(res);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          about: res.data.about,
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
        formData={formData}
        page='Edit'
      />
    </>
  );
}
