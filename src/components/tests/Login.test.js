import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders the login form', () => {
  const { getByTestId } = render(<Login />);
  const loginForm = getByTestId('login-form');
  expect(loginForm).toBeInTheDocument();
});

test('allows users to input username and password', () => {
  const { getByTestId } = render(<Login />);
  const usernameInput = getByTestId('username-input');
  const passwordInput = getByTestId('password-input');
  
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('testpassword');
});

