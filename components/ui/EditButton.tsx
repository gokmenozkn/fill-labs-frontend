import Link from 'next/link';
import { User } from '@/types/User';

export default function EditButton({ user }: { user: User }) {
  return (
    <Link
      href={`/edit/${user.id}`}
      className='mr-4 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
    >
      Edit
    </Link>
  );
}
