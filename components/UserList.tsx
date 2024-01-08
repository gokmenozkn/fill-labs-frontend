import Link from "next/link";
import axios from "axios";
import useUsers from "@/hooks/useUser";
import UserApi from "@/utils/api";

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
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td className='py-2 px-4 border-b text-center'>{user.id}</td>
              <td className='py-2 px-4 border-b text-center'>{user.name}</td>
              <td className='py-2 px-4 border-b text-center'>{user.email}</td>
              <td className='py-2 px-4 border-b text-center'>
                {user.createdAt}
              </td>
              <td className='py-2 px-4 border-b'>
                <div className='flex items-center'>
                  <Link
                    href={`/edit/${user.id}`}
                    className='mr-4 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800'
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
