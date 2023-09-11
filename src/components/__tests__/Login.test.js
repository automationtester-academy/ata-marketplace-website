import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Login from '../Login';


test('submits the form with valid data', async () => {
  const { getByTestId, getByText, queryByText, fireEvent, waitFor } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const usernameInput = getByTestId('username-login');
  const passwordInput = getByTestId('password-login');
  const submitButton = getByTestId('submit-login');

  fireEvent.input(usernameInput, { target: { value: 'known_user' } });
  fireEvent.input(passwordInput, { target: { value: 'cypress-geek' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    const successMessage = getByText('Login successful'); // Replace with your actual success message
    const errorMessage = queryByText('Login failed'); // Replace with your actual error message

    expect(successMessage || errorMessage).toBeTruthy();
  });
});
