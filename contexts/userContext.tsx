'use client';

import { User } from '@/types/User';
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface IUserContextState {
  users: User[];
}

type UserAction =
  | { type: 'SET_USER'; payload: User[] }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'UPDATE_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: number };

const UserContext = createContext<
  { state: IUserContextState; dispatch: React.Dispatch<UserAction> } | undefined
>(undefined);

const userReducer = (state: IUserContextState, action: UserAction) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, users: action.payload };
    case 'ADD_USER': {
      const users = state.users || [];
      return { ...state, users: [...users, action.payload] };
    }
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(userReducer, { users: [] });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
}
