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

//////////////////////////////////////////////////////////////////


// test('First Name error message should be displayed', () => {
//   const firstNameError = 'This is a first name error message';

//   render(
//     <MemoryRouter>
//     <Signup
//       firstNameError={firstNameError}
//       lastNameError=""
//       emailError=""
//       passwordError=""
//       confirmPasswordError=""
//     />
//     </MemoryRouter>
//   );

//   const errorMessage = screen.getByText(firstNameError);
//   expect(errorMessage).toBeInTheDocument();
// });

// test('Last Name error message should be displayed', () => {
//   const lastNameError = 'This is a last name error message';

//   render(
//     <MemoryRouter>
//     <Signup
//       firstNameError=""
//       lastNameError={lastNameError}
//       emailError=""
//       passwordError=""
//       confirmPasswordError=""
//     />
//     </MemoryRouter>
//   );

//   const errorMessage = screen.getByText(lastNameError);
//   expect(errorMessage).toBeInTheDocument();
// });

// test('Email error message should be displayed', () => {
//   const emailError = 'This is an email error message';

//   render(
//     <MemoryRouter>
//     <Signup
//       firstNameError=""
//       lastNameError=""
//       emailError={emailError}
//       passwordError=""
//       confirmPasswordError=""
//     />
//     </MemoryRouter>
//   );

//   const errorMessage = screen.getByText(emailError);
//   expect(errorMessage).toBeInTheDocument();
// });

// test('Password error message should be displayed', () => {
//   const passwordError = 'This is a password error message';

//   render(
//     <MemoryRouter>
//     <Signup
//       firstNameError=""
//       lastNameError=""
//       emailError=""
//       passwordError={passwordError}
//       confirmPasswordError=""
//     />
//     </MemoryRouter>
//   );

//   const errorMessage = screen.getByText(passwordError);
//   expect(errorMessage).toBeInTheDocument();
// });

// test('Password Confirmation error message should be displayed', () => {
//     const confirmPasswordError = 'This is a confirmation password error message';
  
//     render(
//         <MemoryRouter>
//       <Signup
//         firstNameError=""
//         lastNameError=""
//         emailError=""
//         passwordError=""
//         confirmPasswordError={confirmPasswordError}
//       />
//       </MemoryRouter>
//     );
  
//     const errorMessage = screen.getByText(confirmPasswordError);
//     expect(errorMessage).toBeInTheDocument();
//   });
  

// test('Display error messages for empty fields', () => {
//   render(
//   <MemoryRouter>
//     <Signup />
//   </MemoryRouter>
//   );

//   const signupButton = screen.getByText("S'inscrire");
//   userEvent.click(signupButton); // Submit the form without filling any fields

//   const firstNameErrorMessage = screen.getByText("Le prénom ne peut pas être vide.");
//   const lastNameErrorMessage = screen.getByText("Le nom ne peut pas être vide.");
//   const emailErrorMessage = screen.getByText("L'email ne peut pas être vide.");
//   const passwordErrorMessage = screen.getByText("Le mot de passe ne peut pas être vide.");
//   const confirmPasswordErrorMessage = screen.getByText(
//     "La confirmation du mot de passe ne peut pas être vide."
//   );

//   expect(firstNameErrorMessage).toBeInTheDocument();
//   expect(lastNameErrorMessage).toBeInTheDocument();
//   expect(emailErrorMessage).toBeInTheDocument();
//   expect(passwordErrorMessage).toBeInTheDocument();
//   expect(confirmPasswordErrorMessage).toBeInTheDocument();
// });

// test('Display error message for non-matching passwords', () => {
//     render(
//         <MemoryRouter>
//           <Signup />
//         </MemoryRouter>
//         );

//   const passwordInput = screen.getByPlaceholderText('Insérer votre Mot de passe');
//   const confirmPasswordInput = screen.getByPlaceholderText('Insérer votre confirmation de mot de passe');
//   const signupButton = screen.getByText("S'inscrire");

//   // Fill in the form with data that should trigger a password mismatch error
//   fireEvent.change(passwordInput, { target: { value: 'password123' } });
//   fireEvent.change(confirmPasswordInput, { target: { value: 'differentpassword' } });
//   userEvent.click(signupButton);

//   const confirmPasswordErrorMessage = screen.getByText("Les mots de passe ne correspondent pas.");

//   expect(confirmPasswordErrorMessage).toBeInTheDocument();
// });
