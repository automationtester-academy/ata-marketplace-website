// cypress/integration/login.spec.js

describe("Login Component", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("/"); // Update this URL with your actual login page URL
  });

  it("should display the login form", () => {
    // Check if the login form elements are visible
    cy.get("[data-test=username-login]").should("be.visible");
    cy.get("[data-test=password-login]").should("be.visible");
    cy.get("[data-test=submit-login]").should("be.visible");
  });

  it("should show an error for empty fields", () => {
    // Trigger login without filling in the fields
    cy.get("[data-test=submit-login]").click();

    // Check if the error message is displayed
    cy.get(".error-message")
      .should("be.visible")
      .and("contain.text", "Veuillez renseigner votre nom d'utilisateur");
  });

  it("should show an error for incorrect login credentials", () => {
    // Enter incorrect login credentials
    cy.get("[data-test=username-login]").type("invalid_username");
    cy.get("[data-test=password-login]").type("invalid_password");
    cy.get("[data-test=submit-login]").click();

    // Check if the error message is displayed
    cy.get(".error-message").should("be.visible").and(
      "contain.text",
      "Veuillez vérifier votre nom d'utilisateur ou mot de passe"
    );
  });

  it("should successfully log in with correct credentials", () => {
    // Enter correct login credentials
    cy.get("[data-test=username-login]").type("known_user");
    cy.get("[data-test=password-login]").type("cypress-geek");
    cy.get("[data-test=submit-login]").click();

    // Check if the redirection to the home page occurred
    cy.url().should("include", "/home"); // Update this URL with your actual home page URL
  });
});
