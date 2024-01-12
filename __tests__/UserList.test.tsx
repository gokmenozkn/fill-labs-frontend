import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import UserList from '@/components/UserList';
import UserContextProvider from '@/contexts/userContext';
import { User } from '@/types/User';

describe('UserList', () => {
  it("should render a table with headers and rows for each user in the 'users' prop", () => {
    const users = [
      {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        about: '',
        createdAt: '2021-01-01',
      },
      {
        id: 2,
        name: 'Jane',
        email: 'jane@example.com',
        about: 'test',
        createdAt: '2021-02-01',
      },
    ];

    render(
      <UserContextProvider>
        <UserList users={users} />
      </UserContextProvider>
    );

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('CreatedAt')).toBeInTheDocument();

    users.forEach((user) => {
      expect(screen.getByText(user.id.toString())).toBeInTheDocument();
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.createdAt)).toBeInTheDocument();
    });
  });
  it('should render an EmptyRow component when users prop is empty', () => {
    const users: User[] = [];

    render(
      <UserContextProvider>
        <UserList users={users} />
      </UserContextProvider>
    );

    expect(screen.getByText('No data to show')).toBeInTheDocument();
  })
});
