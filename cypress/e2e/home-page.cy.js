// cypress/integration/home-page.spec.js

describe('Home Page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('/home'); // Update this URL with your actual home page URL
    });
  
    it('should display the header and footer', () => {
      // Check if the header and footer elements are visible
      cy.get('header').should('be.visible');
      cy.get('footer').should('be.visible');
    });
  
    it('should display the products section', () => {
      // Check if the products section is visible
      cy.contains('Products').should('be.visible');
    });
  
    it('should have a search input and button', () => {
      // Check if the search input and button are visible
      cy.get('[data-cy=search-products]').should('be.visible');
      cy.get('[data-cy=submit-search]').should('be.visible');
    });
  
    it('should perform a search when the search button is clicked', () => {
      // Enter a search query in the search input
      cy.get('[data-cy=search-products]').type('Product Name');
  
      // Click the search button
      cy.get('[data-cy=submit-search]').click();
  
      // Add assertions for the search functionality
      // For example, you can check if search results are displayed on the page
      // cy.contains('Search Results').should('be.visible');
    });
  });
  