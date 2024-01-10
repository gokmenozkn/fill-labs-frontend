import { User } from '@/types/User';
import EditButton from './ui/EditButton';
import DeleteButton from './ui/DeleteButton';

interface IListItem {
  user: User;
  handleDelete: (id: number) => void;
}

export default function UserListItem({ user, handleDelete }: IListItem) {
  return (
    <tr>
      <td className='py-2 px-4 border-b text-center'>{user.id}</td>
      <td className='py-2 px-4 border-b text-center'>{user.name}</td>
      <td className='py-2 px-4 border-b text-center'>{user.email}</td>
      <td className='py-2 px-4 border-b text-center'>{user.createdAt}</td>
      <td className='py-2 px-4 border-b'>
        <div className='flex items-center'>
          <EditButton userId={user.id} />
          <DeleteButton handleDelete={handleDelete} id={user.id} />
        </div>
      </td>
    </tr>
  );
}
