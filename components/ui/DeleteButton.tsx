import { User } from '@/types/User';

interface IButton {
  handleDelete: (id: number) => void;
  id: number;
}

export default function DeleteButton({ handleDelete, id }: IButton) {
  return (
    <button
      onClick={() => handleDelete(id)}
      className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800'
    >
      Delete
    </button>
  );
}
