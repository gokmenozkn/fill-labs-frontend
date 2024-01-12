import '@testing-library/jest-dom';
import UserListItem from '@/components/UserListItem';
import { render } from '@testing-library/react';
import UserContextProvider from '@/contexts/userContext';

describe('User list item', () => {
  it('should render a table row with user information when user prop is provided', () => {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      about: 'john doe is the great',
      createdAt: '2021-01-01',
    };

    const { getByText } = render(
      <UserContextProvider>
        <table>
          <tbody>
            <UserListItem user={user} />
          </tbody>
        </table>
      </UserContextProvider>
    );

    expect(getByText(user.id)).toBeInTheDocument();
    expect(getByText(user.name)).toBeInTheDocument();
    expect(getByText(user.email)).toBeInTheDocument();
    expect(getByText(user.createdAt)).toBeInTheDocument();
  });
});
