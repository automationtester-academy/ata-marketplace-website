// Cypress test for Footer component
describe('Footer', () => {
    it('should display the Footer elements', () => {
      
      cy.visit('/');

      cy.get("[data-test=username-login]").type("known_user");
      cy.get("[data-test=password-login]").type("cypress-geek");
      cy.get("[data-test=submit-login]").click();
  
      // Check if the "A propos" section is displayed
      cy.get('[data-test=p-apropos]').should('be.visible');
  
      // Check if the description text is displayed
      cy.get('[data-test=p-desc]').should('be.visible');
  
      // Check if the "Contactez nous!" section is displayed
      cy.get('[data-test=p-contact]').should('be.visible');
  
      // Check if the address, email, and phone information is displayed
      cy.get('[data-test=p-adresse]').should('be.visible');
      cy.get('[data-test=p-email]').should('be.visible');
      cy.get('[data-test=p-tele]').should('be.visible');
  
      // Check if the "Follow Us" section is displayed
      cy.get('[data-test=p-media]').should('be.visible');
  
      // Check if the Facebook, Instagram, and Twitter links are displayed
      cy.get('[data-test=p-linkedin]').should('be.visible');
      cy.get('[data-test=p-instagram]').should('be.visible');
      cy.get('[data-test=p-twitter]').should('be.visible');
  
      // Check if the copyright text is displayed
      cy.get('[data-test=p-copyright]').should('be.visible');
    });
  });
  