import Link from 'next/link';

export default function EditButton({ userId }: { userId: number }) {
  return (
    <Link
      href={`/edit/${userId}`}
      className='mr-4 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
    >
      Edit
    </Link>
  );
}
