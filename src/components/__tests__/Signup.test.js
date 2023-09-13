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


/*

import React from 'react';
import { shallow } from 'enzyme';
import Signup from './signup.jsx';

describe('Signup', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Signup />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.signup-container')).toHaveLength(1);
    expect(wrapper.find('.logo-section')).toHaveLength(1);
    expect(wrapper.find('.form-section')).toHaveLength(1);
  });

  it('should render the first name input field', () => {
    const wrapper = shallow(<Signup />);

    const firstNameInput = wrapper.find('input[name="firstName"]');

    expect(firstNameInput).toHaveLength(1);
    expect(firstNameInput.props().type).toEqual('text');
    expect(firstNameInput.props().placeholder).toEqual('Prénom *');
  });

  it('should render the last name input field', () => {
    const wrapper = shallow(<Signup />);

    const lastNameInput = wrapper.find('input[name="lastName"]');

    expect(lastNameInput).toHaveLength(1);
    expect(lastNameInput.props().type).toEqual('text');
    expect(lastNameInput.props().placeholder).toEqual('Nom *');
  });

  it('should render the email input field', () => {
    const wrapper = shallow(<Signup />);

    const emailInput = wrapper.find('input[name="email"]');

    expect(emailInput).toHaveLength(1);
    expect(emailInput.props().type).toEqual('email');
    expect(emailInput.props().placeholder).toEqual('Email *');
  });

  it('should render the password input field', () => {
    const wrapper = shallow(<Signup />);

    const passwordInput = wrapper.find('input[name="password"]');

    expect(passwordInput).toHaveLength(1);
    expect(passwordInput.props().type).toEqual('password');
    expect(passwordInput.props().placeholder).toEqual('Entrer votre Mot de passe *');
  });
});
*/