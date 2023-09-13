
export const mobileResolution = {
  viewportWidth: 375,
  viewportHeight: 812
};

describe('Header', () => {

  beforeEach(() => {
    cy.visit('/');

  });

  it('should display the Header elements', () => {

    // Log in if needed
    cy.get("[data-test=username-login]").type("known_user");
    cy.get("[data-test=password-login]").type("cypress-geek");
    cy.get("[data-test=submit-login]").click();

    // Check if the logo is displayed
    cy.get('[data-test=logo-img]').should('be.visible');

    // Check if the navigation links are displayed
    cy.get('[data-test=home-list]').should('be.visible')
      .and("contain.text", "Home");

    cy.get('[data-test=apropos-list]')
      .should('be.visible')
      .and("contain.text", "A Propos");

    cy.get('[data-test=connectez-list]')
      .should('be.visible')
      .and("contain.text", "Contactez Nous!");

    // Check if the shopping cart icon is displayed
    cy.get('[data-test=shopping-cart-icon]').should('be.visible');
  });


  it('should display the Header elements on mobile', mobileResolution, () => {

    cy.get("[data-test=username-login]").type("known_user");
    cy.get("[data-test=password-login]").type("cypress-geek");
    cy.get("[data-test=submit-login]").click();

    
    
  });
});
