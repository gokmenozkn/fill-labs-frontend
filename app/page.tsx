'use client';

import Link from 'next/link';
import UserList from '@/components/UserList';
import useUsers from '@/hooks/useUser';

export default function Home() {
  const { users, setUsers } = useUsers();

  return (
    <>
      <div className='mb-4'></div>
      <div className='max-w-3xl mx-auto overflow-x-auto'>
        <header className='bg-cyan-500 flex justify-between items-center py-4 px-4'>
          <h1 className='font-bold text-white'>View Users</h1>
          <Link
            className='bg-white py-2 px-4 rounded hover:bg-cyan-50'
            href='/create'
          >
            Create New User
          </Link>
        </header>
        <UserList users={users} setUsers={setUsers} />
      </div>
    </>
  );
}
