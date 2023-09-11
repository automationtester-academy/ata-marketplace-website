import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Signup from '../Signup';

test('renders the Signup component', () => {
    <MemoryRouter>
    <Signup />
  </MemoryRouter>

  // You can add test queries and assertions here to interact with the component and check its behavior.
  // For example, you can query input fields, buttons, and other elements by data-test attributes.

  const firstNameInput = screen.getByTestId('input-prenom');
  const lastNameInput = screen.getByTestId('input-nom');
  const emailInput = screen.getByTestId('input-email');
  const passwordInput = screen.getByTestId('input-mdp');
  const confirmPasswordInput = screen.getByTestId('input-mdp-confirmation');
  const submitButton = screen.getByTestId('submit-signup');

  // Add your interaction and assertion code here
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

  // Click the signup button
  fireEvent.click(submitButton);

  // Add assertions to check the expected behavior after submission
  // For example, you can check if a success message or a redirection occurs.
});
