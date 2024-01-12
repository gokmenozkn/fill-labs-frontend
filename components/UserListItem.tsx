import { User } from '@/types/User';
import EditButton from './ui/EditButton';
import DeleteButton from './ui/DeleteButton';
import UserApi from '@/utils/api';
import { useUserContext } from '@/contexts/userContext';
import { formatDate } from '@/utils/formatDate';

const userApi = new UserApi();

interface IListItem {
  user: User;
}

export default function UserListItem({ user }: IListItem) {
  const { dispatch } = useUserContext();
  const formattedDate = formatDate(user.createdAt);
  
  const handleDelete = async () => {
    try {
      const res = await userApi.deleteUser(user.id.toString());
      console.log('user deleted:', res);
      dispatch({ type: 'DELETE_USER', payload: user.id });
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  return (
    <tr>
      <td className='py-2 px-4 border-b text-center'>{user.id}</td>
      <td className='py-2 px-4 border-b text-center'>{user.name}</td>
      <td className='py-2 px-4 border-b text-center'>{user.email}</td>
      <td className='py-2 px-4 border-b text-center'>{formattedDate}</td>
      <td className='py-2 px-4 border-b'>
        <div className='flex items-center'>
          <EditButton userId={user.id} />
          <DeleteButton handleDelete={handleDelete} />
        </div>
      </td>
    </tr>
  );
}
