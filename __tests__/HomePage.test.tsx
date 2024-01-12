import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';
import UserContextProvider from '@/contexts/userContext';

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <UserContextProvider>
        <Page />
      </UserContextProvider>
    );

    const heading = screen.getByText(/view users/i);
    expect(heading).toBeInTheDocument();
  });
});
