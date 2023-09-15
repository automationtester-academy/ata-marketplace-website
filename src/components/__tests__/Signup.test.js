import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter} from 'react-router-dom';

import Signup from '../Signup';

test('logo image should be rendered', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  
    const logoImage = screen.getByTestId('logo-img-signup');
    expect(logoImage).toBeInTheDocument();
  });

  test('firstname label should be rendered', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  
    // Use getByTestId to find the label by its data-test attribute
    const firstnameLabel = screen.getByTestId('prenom');
    expect(firstnameLabel).toBeInTheDocument();
  });

  test('lastname label should be rendered', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  
    // Use getByTestId to find the label by its data-test attribute
    const lastnameLabel = screen.getByTestId('nom');
    expect(lastnameLabel).toBeInTheDocument();
  });

  test('email label should be rendered', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  
    // Use getByTestId to find the label by its data-test attribute
    const emailLabel = screen.getByTestId('email');
    expect(emailLabel).toBeInTheDocument();
  });


  test('password label should be rendered', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  
    // Use getByTestId to find the label by its data-test attribute
    const passwordLabel = screen.getByTestId('label-mdp');
    expect(passwordLabel).toBeInTheDocument();
  });

  test('passwordconfirm label should be rendered', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  
    // Use getByTestId to find the label by its data-test attribute
    const passwordconfirmLabel = screen.getByTestId('confirm-mdp');
    expect(passwordconfirmLabel).toBeInTheDocument();
  });

test('firstname input should be rendered', () => {
  render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
  );
  const firstnameInputEl = screen.getByPlaceholderText("Insérer votre Prénom");
  expect(firstnameInputEl).toBeInTheDocument()
});

test('lastname input should be rendered', () => {
  render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
  );
  const lastnameInputEl = screen.getByPlaceholderText("Insérer votre Nom");
  expect(lastnameInputEl).toBeInTheDocument()
});


test('email input should be rendered', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const emailInputEl = screen.getByPlaceholderText("Insérer votre Email");
    expect(emailInputEl).toBeInTheDocument()
  });

  test('password input should be rendered', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const passwordInputEl = screen.getByPlaceholderText("Insérer votre Mot de passe");
    expect(passwordInputEl).toBeInTheDocument()
  });

  test('password confirmation input should be rendered', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const passwordconfirmationInputEl = screen.getByPlaceholderText("Insérer votre confirmation de mot de passe");
    expect(passwordconfirmationInputEl).toBeInTheDocument()
  });

test('button should be rendered', () => {
  render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument()
});

test('firstname input should be empty', () => {
  render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
  );
  const firstnameInputEl = screen.getByPlaceholderText("Insérer votre Prénom");
  expect(firstnameInputEl.value).toBe("")
});

test('lastname input should be empty', () => {
  render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
  );
  const lastnameInputEl = screen.getByPlaceholderText("Insérer votre Nom");
  expect(lastnameInputEl.value).toBe("")
});


test('email input should be empty', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const emailInputEl = screen.getByPlaceholderText("Insérer votre Email");
    expect(emailInputEl).toBeInTheDocument()
  });

  test('password input should be empty', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const passwordInputEl = screen.getByPlaceholderText("Insérer votre Mot de passe");
    expect(passwordInputEl).toBeInTheDocument()
  });

  test('password confirmation input should be empty', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const passwordconfirmationInputEl = screen.getByPlaceholderText("Insérer votre confirmation de mot de passe");
    expect(passwordconfirmationInputEl).toBeInTheDocument()
  });

test('firstname input should change', () => {
  render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
  );
  const firstnameInputEl = screen.getByPlaceholderText("Insérer votre Prénom");
  const testValue = "test";

  fireEvent.change(firstnameInputEl, {target: {value: testValue }});
  expect(firstnameInputEl.value).toBe(testValue);
});

test('lastname input should change', () => {
  render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
  );
  const lastnameInputEl = screen.getByPlaceholderText("Insérer votre Nom");
  const testValue = "test";

  fireEvent.change(lastnameInputEl, {target: {value: testValue }});
  expect(lastnameInputEl.value).toBe(testValue);
});

test('email input should change', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const emailInputEl = screen.getByPlaceholderText("Insérer votre Email");
    const testValue = "test";
  
    fireEvent.change(emailInputEl, {target: {value: testValue }});
    expect(emailInputEl.value).toBe(testValue);
  });

  test('password input should change', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const passwordInputEl = screen.getByPlaceholderText("Insérer votre Mot de passe");
    const testValue = "test";
  
    fireEvent.change(passwordInputEl, {target: {value: testValue }});
    expect(passwordInputEl.value).toBe(testValue);
  });

  test('passwordconfirmation input should change', () => {
    render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
    );
    const passwordconfirmationInputEl = screen.getByPlaceholderText("Insérer votre confirmation de mot de passe");
    const testValue = "test";
  
    fireEvent.change(passwordconfirmationInputEl, {target: {value: testValue }});
    expect(passwordconfirmationInputEl.value).toBe(testValue);
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// test('First Name error message should be displayed', () => {
//   render(
//     <MemoryRouter>
//       <Signup />
//     </MemoryRouter>
//   );

//   // Find the input field for the First Name
//   const firstnameInputEl = screen.getByPlaceholderText("Insérer votre Prénom");

//   // Trigger a form submission without filling in the First Name
//   const signupButton = screen.getByText("S'inscrire");
//   userEvent.click(signupButton);

//   // Find and assert the error message for First Name
//   const firstNameErrorMessage = screen.getByText("Le prénom ne peut pas être vide.");
//   expect(firstNameErrorMessage).toBeInTheDocument();
// });

// test('Last Name error message should be displayed', () => {
//   render(
//     <MemoryRouter>
//       <Signup />
//     </MemoryRouter>
//   );

//   // Find the input field for the Last Name
//   const lastnameInputEl = screen.getByPlaceholderText("Insérer votre Nom");

//   // Trigger a form submission without filling in the Last Name
//   const signupButton = screen.getByText("S'inscrire");
//   userEvent.click(signupButton);

//   // Find and assert the error message for Last Name
//   const lastNameErrorMessage = screen.getByText("Le nom ne peut pas être vide.");
//   expect(lastNameErrorMessage).toBeInTheDocument();
// });

// test('Email error message should be displayed', () => {
//   render(
//     <MemoryRouter>
//       <Signup />
//     </MemoryRouter>
//   );

//   // Find the input field for Email
//   const emailInputEl = screen.getByPlaceholderText("Insérer votre Email");

//   // Trigger a form submission without filling in the Email
//   const signupButton = screen.getByText("S'inscrire");
//   userEvent.click(signupButton);

//   // Find and assert the error message for Email
//   const emailErrorMessage = screen.getByText("L'email ne peut pas être vide.");
//   expect(emailErrorMessage).toBeInTheDocument();
// });

// test('Password error message should be displayed', () => {
//   render(
//     <MemoryRouter>
//       <Signup />
//     </MemoryRouter>
//   );

//   // Find the input field for Password
//   const passwordInputEl = screen.getByPlaceholderText("Insérer votre Mot de passe");

//   // Trigger a form submission without filling in the Password
//   const signupButton = screen.getByText("S'inscrire");
//   userEvent.click(signupButton);

//   // Find and assert the error message for Password
//   const passwordErrorMessage = screen.getByText("Le mot de passe ne peut pas être vide.");
//   expect(passwordErrorMessage).toBeInTheDocument();
// });


// test('Confirm Password error message should be displayed', () => {
//   render(
//     <MemoryRouter>
//       <Signup />
//     </MemoryRouter>
//   );

//   // Find the input field for Confirm Password
//   const confirmPasswordInputEl = screen.getByPlaceholderText("Insérer votre confirmation de mot de passe");

//   // Trigger a form submission without filling in the Confirm Password
//   const signupButton = screen.getByText("S'inscrire");
//   userEvent.click(signupButton);

//   // Find and assert the error message for Confirm Password
//   const confirmPasswordErrorMessage = screen.getByText("La confirmation du mot de passe ne peut pas être vide.");
//   expect(confirmPasswordErrorMessage).toBeInTheDocument();
// });
