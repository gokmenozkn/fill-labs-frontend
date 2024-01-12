'use client';

import Link from 'next/link';
import UserApi from '@/utils/api';
import UserList from '@/components/UserList';
import { useUserContext } from '@/contexts/userContext';
import { useEffect } from 'react';

const userApi = new UserApi();

export default function Home() {
  const { state, dispatch } = useUserContext();

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await userApi.getUsers();
        dispatch({ type: 'SET_USER', payload: data });
      } catch (e) {
        console.error('Error getting user:', e);
      }
    }
    getUsers();
  }, [dispatch]);

  return (
    <>
      <div className='mb-4'></div>
      <div className='max-w-3xl mx-auto overflow-x-auto'>
        <header className='bg-cyan-500 flex justify-between items-center py-4 px-4'>
          <h1 className='font-bold text-white'>View Users</h1>
          <Link
            className='bg-white py-2 px-4 rounded hover:bg-cyan-50'
            href='/create'
            data-testid='create-button'
          >
            Create New User
          </Link>
        </header>
        <UserList users={state.users} />
      </div>
    </>
  );
}
