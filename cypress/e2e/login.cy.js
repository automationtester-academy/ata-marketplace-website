// cypress/integration/login.spec.js

describe('Login Component', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('http://localhost:3000/'); // Update this URL with your actual login page URL
    });
  
    it('should display the login form', () => {
      // Check if the login form elements are visible
      cy.get('[data-cy=username-login]').should('be.visible');
      cy.get('[data-cy=password-login]').should('be.visible');
      cy.get('[data-cy=submit-login]').should('be.visible');
    });
  
    it('should show an error for empty fields', () => {
      // Trigger login without filling in the fields
      cy.get('[data-cy=submit-login]').click();
  
      // Check if the error message is displayed
      cy.get('[data-e2e=username-error]').should('contain', 'Veuillez remplir les champs obligatoires');
    });
  
    it('should show an error for incorrect login credentials', () => {
      // Enter incorrect login credentials
      cy.get('[data-cy=username-login]').type('invalid_username');
      cy.get('[data-cy=password-login]').type('invalid_password');
      cy.get('[data-cy=submit-login]').click();
  
      // Check if the error message is displayed
      cy.get('.general-error').should('contain', "Nom d'utilisateur ou mot de passe incorrect");
    });
  
    it('should successfully log in with correct credentials', () => {
      // Enter correct login credentials
      cy.get('[data-cy=username-login]').type('known_user');
      cy.get('[data-cy=password-login]').type('cypress-geek');
      cy.get('[data-cy=submit-login]').click();
  
      // Check if the redirection to the home page occurred
      cy.url().should('include', '/home'); // Update this URL with your actual home page URL
    });
  });
  