import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';

import Login from '../Login';

test('logo image should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const logoImage = screen.getByTestId('logo-img-login');
  expect(logoImage).toBeInTheDocument();
});

//

test('username label should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // Use getByTestId to find the label by its data-test attribute
  const usernameLabel = screen.getByTestId('nom-utilisateur');
  expect(usernameLabel).toBeInTheDocument();
});

test('Password label should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const passwordLabel = screen.getByTestId('Mot-de-passe');
  expect(passwordLabel).toBeInTheDocument();
});

test('Forgot Password should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const forgotPassword = screen.getByTestId('mdp-oublié');
  expect(forgotPassword).toBeInTheDocument();
});

test('Remember Me  should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const rememberMe = screen.getByTestId('remember-me');
  expect(rememberMe).toBeInTheDocument();
});

test('Sign Up text should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const signUpText = screen.getByTestId('text-Inscrivez-vous');
  expect(signUpText).toBeInTheDocument();
});

test('Sign Up link should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const signUpLink = screen.getByTestId('link-Inscrivez-vous');
  expect(signUpLink).toBeInTheDocument();
});

test('Accepted usernames should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const userTitle1 = screen.getByTestId('user-title1');
  expect(userTitle1).toBeInTheDocument();
});


test('Accepted usernames should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const userTitle2 = screen.getByTestId('user-title2');
  expect(userTitle2).toBeInTheDocument();
});


test('Accepted usernames should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const userTitle3 = screen.getByTestId('user-title3');
  expect(userTitle3).toBeInTheDocument();
});


test('Accepted usernames should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const userTitle4 = screen.getByTestId('user-title4');
  expect(userTitle4).toBeInTheDocument();
});



test('Common password should be rendered', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const commonPassword = screen.getByTestId('user-mdp');
  expect(commonPassword).toBeInTheDocument();
});


//
test('username input should be rendered', () => {
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
  );
  const usernameInputEl = screen.getByPlaceholderText("Insérer votre Nom d'utilisateur");
  expect(usernameInputEl).toBeInTheDocument()
});

test('password input should be rendered', () => {
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
  );
  const passwordInputEl = screen.getByPlaceholderText("Insérer votre Mot de passe");
  expect(passwordInputEl).toBeInTheDocument()
});

test('button should be rendered', () => {
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument()
});

test('username input should be empty', () => {
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
  );
  const usernameInputEl = screen.getByPlaceholderText("Insérer votre Nom d'utilisateur");
  expect(usernameInputEl.value).toBe("")
});

test('password input should be empty', () => {
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
  );
  const passwordInputEl = screen.getByPlaceholderText("Insérer votre Mot de passe");
  expect(passwordInputEl.value).toBe("")
});

test('username input should change', () => {
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
  );
  const usernameInputEl = screen.getByPlaceholderText("Insérer votre Nom d'utilisateur");
  const testValue = "test";

  fireEvent.change(usernameInputEl, {target: {value: testValue }});
  expect(usernameInputEl.value).toBe(testValue);
});

test('password input should change', () => {
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
  );
  const passwordInputEl = screen.getByPlaceholderText("Insérer votre Mot de passe");
  const testValue = "test";

  fireEvent.change(passwordInputEl, {target: {value: testValue }});
  expect(passwordInputEl.value).toBe(testValue);
});