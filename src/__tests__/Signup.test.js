import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signup from '../__tests__/Signup.test.js';

describe('Signup Component', () => {
    it('renders without errors', () => {
      const { getByTestId } = render(<Signup />);
      const logoImage = getByTestId('logo-img');
      expect(logoImage).toBeInTheDocument();
    });
  
    it('displays error messages for empty fields', () => {
      const { getByTestId, getByText } = render(<Signup />);
      const submitButton = getByTestId('submit-signup');
  
      fireEvent.click(submitButton);
  
      const prenomError = getByText('Le prénom ne peut pas être vide.');
      const nomError = getByText('Le nom ne peut pas être vide.');
      const emailError = getByText("L'email ne peut pas être vide.");
      const passwordError = getByText("Le mot de passe ne peut pas être vide.");
      const mdpConfirmationError = getByText("La confirmation du mot de passe ne peut pas être vide.");
  
      expect(prenomError).toBeInTheDocument();
      expect(nomError).toBeInTheDocument();
      expect(emailError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
      expect(mdpConfirmationError).toBeInTheDocument();
    });
  
    it('displays error message for mismatched passwords', () => {
      const { getByTestId, getByText } = render(<Signup />);
      const passwordInput = getByTestId('password');
      const confirmPasswordInput = getByTestId('confirmPassword');
      const submitButton = getByTestId('submit-signup');
  
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'mismatched' } });
      fireEvent.click(submitButton);
  
      const mdpConfirmationError = getByText("Les mots de passe ne correspondent pas.");
      expect(mdpConfirmationError).toBeInTheDocument();
    });
  
    // Add more test cases to cover different scenarios.
  
  });
  