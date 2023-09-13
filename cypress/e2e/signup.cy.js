// cypress/integration/signup.spec.js

describe('Signup Component', () => {
    beforeEach(() => {
      // Visit the signup page before each test
      cy.visit('/signup'); // Update this URL with your actual signup page URL
    });
  
    it('should display the signup form', () => {
      // Check if the signup form elements are visible
      cy.get('[data-test=input-prenom]').should('be.visible');
      cy.get('[data-test=input-nom]').should('be.visible');
      cy.get('[data-test=input-email]').should('be.visible');
      cy.get('[data-test=input-mdp]').should('be.visible');
      cy.get('[data-test=input-mdp-confirmation]').should('be.visible');
      cy.get('[data-test=submit-signup]').should('be.visible');
    });
  
    it('should show errors for empty fields', () => {
      // Trigger signup without filling in the fields
      cy.get('[data-test=submit-signup]').click();
  
      // Check if the error messages are displayed for required fields
      cy.get('.error-message')
        .should("be.visible")
       .and('contain.text', 'Le prénom ne peut pas être vide.');
      cy.get('.error-message')
        .should("be.visible")
        .and('contain.text', 'Le nom ne peut pas être vide.');
      cy.get('.error-message')
        .should("be.visible")
        .and('contain.text', 'L\'email ne peut pas être vide.');
      cy.get('.error-message')
        .should("be.visible")
        .and('contain.text', 'Le mot de passe ne peut pas être vide.');
      cy.get('.error-message')
        .should("be.visible")
        .and('contain.text', 'La confirmation du mot de passe ne peut pas être vide.');
    });
  
    it('should show an error for password mismatch', () => {
      // Enter different passwords in the password and confirmation fields
      cy.get('[data-test=input-mdp]').type('password123');
      cy.get('[data-test=input-mdp-confirmation]').type('differentpassword');
      cy.get('[data-test=submit-signup]').click();
  
      // Check if the error message is displayed for password mismatch
      cy.get('.error-message')
      .should("be.visible")
      .and('contain.text', 'Les mots de passe ne correspondent pas.');
    });
  
    it('should successfully sign up with valid information', () => {
      // Enter valid information in the signup form
      cy.get('[data-test=input-prenom]').type('John');
      cy.get('[data-test=input-nom]').type('Doe');
      cy.get('[data-test=input-email]').type('johndoe@example.com');
      cy.get('[data-test=input-mdp]').type('password123');
      cy.get('[data-test=input-mdp-confirmation]').type('password123');
      cy.get('[data-test=submit-signup]').click();
  
      // Check if the signup logic is executed (you can customize this part)
      // For example, you can check for a successful message or redirection
      // cy.url().should('include', '/success'); // Update with your actual success page URL
      
      cy.url().should("include", "/"); 

    });
  });
  