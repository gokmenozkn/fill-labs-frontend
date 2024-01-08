import { useState, useEffect } from 'react';
import { User } from '@/types/User';
import UserApi from '@/utils/api';

// export const getUsers = async () => {
//   const apiUrl = 'http://localhost:8080/users';

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     throw error;
//   }
// };

const userApi = new UserApi();

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await userApi.getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error in useUsers:', error);
        setError('Error fetching users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { users, setUsers, loading, error };
};

export default useUsers;
