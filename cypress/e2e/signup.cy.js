// cypress/integration/signup.spec.js

describe('Signup Component', () => {
    beforeEach(() => {
      // Visit the signup page before each test
      cy.visit('/signup'); // Update this URL with your actual signup page URL
    });
  
    it('should display the signup form', () => {
      // Check if the signup form elements are visible
      cy.get('[data-e2e=firstName]').should('be.visible');
      cy.get('[data-e2e=lastName]').should('be.visible');
      cy.get('[data-e2e=email]').should('be.visible');
      cy.get('[data-e2e=password]').should('be.visible');
      cy.get('[data-e2e=password-confirmation]').should('be.visible');
      cy.get('[data-e2e=submit-signup]').should('be.visible');
    });
  
    it('should show errors for empty fields', () => {
      // Trigger signup without filling in the fields
      cy.get('[data-e2e=submit-signup]').click();
  
      // Check if the error messages are displayed for required fields
      cy.get('.error-message').should('contain', 'Le prénom ne peut pas être vide.');
      cy.get('.error-message').should('contain', 'Le nom ne peut pas être vide.');
      cy.get('.error-message').should('contain', 'L\'email ne peut pas être vide.');
      cy.get('.error-message').should('contain', 'Le mot de passe ne peut pas être vide.');
      cy.get('.error-message').should('contain', 'La confirmation du mot de passe ne peut pas être vide.');
    });
  
    it('should show an error for password mismatch', () => {
      // Enter different passwords in the password and confirmation fields
      cy.get('[data-e2e=password]').type('password123');
      cy.get('[data-e2e=password-confirmation]').type('differentpassword');
      cy.get('[data-e2e=submit-signup]').click();
  
      // Check if the error message is displayed for password mismatch
      cy.get('.error-message').should('contain', 'Les mots de passe ne correspondent pas.');
    });
  
    it('should successfully sign up with valid information', () => {
      // Enter valid information in the signup form
      cy.get('[data-e2e=firstName]').type('John');
      cy.get('[data-e2e=lastName]').type('Doe');
      cy.get('[data-e2e=email]').type('johndoe@example.com');
      cy.get('[data-e2e=password]').type('password123');
      cy.get('[data-e2e=password-confirmation]').type('password123');
      cy.get('[data-e2e=submit-signup]').click();
  
      // Check if the signup logic is executed (you can customize this part)
      // For example, you can check for a successful message or redirection
      // cy.url().should('include', '/success'); // Update with your actual success page URL
    });
  });
  