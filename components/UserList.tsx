import UserListItem from './UserListItem';
import EmptyRow from './EmptyRow';
import { User } from '@/types/User';

interface IUserList {
  users: User[];
}

export default function UserList({ users }: IUserList) {
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
            />
          ))
        )}
      </tbody>
    </table>
  );
}
