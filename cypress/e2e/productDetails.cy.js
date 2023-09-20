describe('ProductDetails Component', () => {
    
    // var = ...

    beforeEach(() => {
      cy.visit('/product/3'); 
    });
  
    it('should select size and color and add to cart', () => {
     
      cy.get('[data-test="taille-label"]').click(); 

      cy.get('[data-test="item-one"]').click();

      cy.get('[data-test="items-two"]').click(); 
  

      cy.get('[data-test="submit-login"]').click();
  

    });

  });
  