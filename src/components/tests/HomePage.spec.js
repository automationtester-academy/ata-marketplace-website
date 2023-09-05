describe('HomePage', () => {
    beforeEach(() => {
      // Visit your homepage or set up any necessary test data.
      cy.visit('/');
    });
  
    it('should display the header and footer', () => {
      // Assert that the header and footer are visible.
      cy.get('header').should('be.visible');
      cy.get('footer').should('be.visible');
    });
  
    it('should search for products', () => {
      // Type a search query and click the search button.
      cy.get('[data-cy="search-input"]').type('Your search query');
      cy.get('[data-cy="submit"]').click();
  
      // Assert that the search results are displayed.
      cy.get('[data-cy="search-results"]').should('be.visible');
    });
  
    it('should handle empty search results', () => {
      // Type a search query that will yield no results and click the search button.
      cy.get('[data-cy="search-input"]').type('Non-existent product');
      cy.get('[data-cy="submit"]').click();
  
      // Assert that a message for empty results is displayed.
      cy.get('[data-cy="empty-results-message"]').should('be.visible');
    });
  });
  