import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../__tests__/Login.test.js';

test('renders login form', () => {
  const { getByText, getByLabelText } = render(<Login />);
  
  // Example: Check if a label and button exist
  const usernameLabel = getByLabelText('Nom d\'utilisateur');
  const passwordLabel = getByLabelText('Mot de passe');
  const loginButton = getByText('Se Connecter');

  expect(usernameLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

// Add more test cases for specific interactions and validations
