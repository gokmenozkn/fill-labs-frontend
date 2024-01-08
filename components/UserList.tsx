import useUsers from '@/hooks/useUser';
import UserApi from '@/utils/api';
import UserListItem from './UserListItem';

const userApi = new UserApi();

export default function UserList() {
  const { users, setUsers } = useUsers();

  const handleDelete = async (id: number) => {
    try {
      const res = await userApi.deleteUser(id.toString());
      console.log('user deleted:', res);
      setUsers((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log('Hata hata:', error);
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
          <tr>
            <td colSpan={5} className='py-2 px-4 border-b text-center text-lg'>
              No data to show
            </td>
          </tr>
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
