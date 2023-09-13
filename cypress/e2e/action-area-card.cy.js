// cypress/integration/action-area-card.spec.js

describe('Action Area Card Component', () => {
    beforeEach(() => {
      // Visit the page containing the ActionAreaCard component before each test
      cy.visit('/home'); // Update this URL with the actual URL where the ActionAreaCard is displayed
    });
  
    it('should display action area cards with product details', () => {
      // Check if there are action area cards displayed on the page
      cy.get('.card-container').should('have.length.gt', 0);
  
      // Iterate through each action area card and check its content
      cy.get('.card-container').each(($card, index) => {
        cy.wrap($card).within(() => {
          // Check if the card contains an image
          cy.get('img').should('be.visible');
  
          // Check if the card contains a product name
          cy.get('.product-name').should('be.visible');
  
          // Check if the card contains a product description
          cy.get('.product-desc').should('be.visible');
  
          // Check if the card contains a price
          cy.get('.bottom-content p').should('be.visible');
  
          // Check if the card contains a "Consulter" button
          cy.get('[data-test=consulter-btn]').should('be.visible');
        });
      });
    });
  
    it('should open a product details page when "Consulter" is clicked', () => {
      // Click the "Consulter" button of the first card
      cy.get('[data-test=consulter-btn]').first().click();
  
      // Add assertions for the product details page
      // For example, you can check if the product details are displayed correctly
      // cy.contains('Product Details').should('be.visible');
    });
  });
  