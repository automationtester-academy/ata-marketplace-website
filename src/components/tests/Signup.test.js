import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signup from './Signup';

test('renders the signup form', () => {
  const { getByTestId } = render(<Signup />);
  const signupForm = getByTestId('signup-form');
  expect(signupForm).toBeInTheDocument();
});

test('allows users to input first name and last name', () => {
  const { getByTestId } = render(<Signup />);
  const firstNameInput = getByTestId('firstName');
  const lastNameInput = getByTestId('lastName');
  
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  
  expect(firstNameInput.value).toBe('John');
  expect(lastNameInput.value).toBe('Doe');
});

test('displays error messages for empty fields', () => {
  const { getByTestId, getByText } = render(<Signup />);
  const submitButton = getByTestId('submit-signup');
  
  fireEvent.click(submitButton);
  
  const firstNameError = getByText("Le prénom ne peut pas être vide.");
  const lastNameError = getByText("Le nom ne peut pas être vide.");
  const emailError = getByText("L'email ne peut pas être vide.");
  const passwordError = getByText("Le mot de passe ne peut pas être vide.");
  const confirmPasswordError = getByText("La confirmation du mot de passe ne peut pas être vide.");
  
  expect(firstNameError).toBeInTheDocument();
  expect(lastNameError).toBeInTheDocument();
  expect(emailError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(confirmPasswordError).toBeInTheDocument();
});

test('displays error message for mismatched passwords', () => {
  const { getByTestId, getByText } = render(<Signup />);
  const passwordInput = getByTestId('password');
  const confirmPasswordInput = getByTestId('password-confirmation');
  const submitButton = getByTestId('submit-signup');
  
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'mismatched' } });
  fireEvent.click(submitButton);
  
  const confirmPasswordError = getByText("Les mots de passe ne correspondent pas.");
  expect(confirmPasswordError).toBeInTheDocument();
});

// Add more test cases to cover other validation scenarios and user interactions.
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signup from './Signup';

test('renders the signup form', () => {
  const { getByTestId } = render(<Signup />);
  const signupForm = getByTestId('signup-form');
  expect(signupForm).toBeInTheDocument();
});

test('allows users to input first name and last name', () => {
  const { getByTestId } = render(<Signup />);
  const firstNameInput = getByTestId('firstName');
  const lastNameInput = getByTestId('lastName');
  
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  
  expect(firstNameInput.value).toBe('John');
  expect(lastNameInput.value).toBe('Doe');
});

test('displays error messages for empty fields', () => {
  const { getByTestId, getByText } = render(<Signup />);
  const submitButton = getByTestId('submit-signup');
  
  fireEvent.click(submitButton);
  
  const firstNameError = getByText("Le prénom ne peut pas être vide.");
  const lastNameError = getByText("Le nom ne peut pas être vide.");
  const emailError = getByText("L'email ne peut pas être vide.");
  const passwordError = getByText("Le mot de passe ne peut pas être vide.");
  const confirmPasswordError = getByText("La confirmation du mot de passe ne peut pas être vide.");
  
  expect(firstNameError).toBeInTheDocument();
  expect(lastNameError).toBeInTheDocument();
  expect(emailError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(confirmPasswordError).toBeInTheDocument();
});

test('displays error message for mismatched passwords', () => {
  const { getByTestId, getByText } = render(<Signup />);
  const passwordInput = getByTestId('password');
  const confirmPasswordInput = getByTestId('password-confirmation');
  const submitButton = getByTestId('submit-signup');
  
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'mismatched' } });
  fireEvent.click(submitButton);
  
  const confirmPasswordError = getByText("Les mots de passe ne correspondent pas.");
  expect(confirmPasswordError).toBeInTheDocument();
});

// Add more test cases to cover other validation scenarios and user interactions.
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signup from './Signup';

test('renders the signup form', () => {
  const { getByTestId } = render(<Signup />);
  const signupForm = getByTestId('signup-form');
  expect(signupForm).toBeInTheDocument();
});

test('allows users to input first name and last name', () => {
  const { getByTestId } = render(<Signup />);
  const firstNameInput = getByTestId('firstName');
  const lastNameInput = getByTestId('lastName');
  
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  
  expect(firstNameInput.value).toBe('John');
  expect(lastNameInput.value).toBe('Doe');
});

test('displays error messages for empty fields', () => {
  const { getByTestId, getByText } = render(<Signup />);
  const submitButton = getByTestId('submit-signup');
  
  fireEvent.click(submitButton);
  
  const firstNameError = getByText("Le prénom ne peut pas être vide.");
  const lastNameError = getByText("Le nom ne peut pas être vide.");
  const emailError = getByText("L'email ne peut pas être vide.");
  const passwordError = getByText("Le mot de passe ne peut pas être vide.");
  const confirmPasswordError = getByText("La confirmation du mot de passe ne peut pas être vide.");
  
  expect(firstNameError).toBeInTheDocument();
  expect(lastNameError).toBeInTheDocument();
  expect(emailError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(confirmPasswordError).toBeInTheDocument();
});

test('displays error message for mismatched passwords', () => {
  const { getByTestId, getByText } = render(<Signup />);
  const passwordInput = getByTestId('password');
  const confirmPasswordInput = getByTestId('password-confirmation');
  const submitButton = getByTestId('submit-signup');
  
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'mismatched' } });
  fireEvent.click(submitButton);
  
  const confirmPasswordError = getByText("Les mots de passe ne correspondent pas.");
  expect(confirmPasswordError).toBeInTheDocument();
});

// Add more test cases to cover other validation scenarios and user interactions.
