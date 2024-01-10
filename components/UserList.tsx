import UserApi from '@/utils/api';
import UserListItem from './UserListItem';
import EmptyRow from './EmptyRow';
import { User } from '@/types/User';
import { SetStateAction } from 'react';

const userApi = new UserApi();

interface IUserList {
  users: User[];
  setUsers: React.Dispatch<SetStateAction<User[]>>
}

export default function UserList({ users, setUsers }: IUserList) {
  const handleDelete = async (id: number) => {
    try {
      const res = await userApi.deleteUser(id.toString());
      console.log('user deleted:', res);
      setUsers((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  return (
    <table className='min-w-full bg-white border border-gray-300'>
      <thead>
        <tr>
          <th className='py-2 px-4 border-b'>ID</th>
          <th className='py-2 px-4 border-b'>Name</th>
          <th className='py-2 px-4 border-b'>Email</th>
          <th className='py-2 px-4 border-b'>CreatedAt</th>
          <th className='py-2 px-4 border-b'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <EmptyRow colSpan={5} />
        ) : (
          users.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              handleDelete={handleDelete}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
