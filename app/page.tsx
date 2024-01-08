'use client';

import Link from 'next/link';
import UserList from '@/components/UserList';

export default function Home() {

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8080/users')
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
        <UserList />
      </div>
    </>
  );
}
