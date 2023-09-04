import cy from "cypress";
import Login from "./Login";

describe("Login component", () => {
  it("renders the correct HTML", () => {
    cy.visit("/");
    cy.get(".login-container").should("exist");
    cy.get(".login-actions").should("exist");
    cy.get(".form-container").should("exist");
    cy.get(".input-container").should("exist");
    cy.get(".error-message").should("exist");
    cy.get(".checkbox-forgotten").should("exist");
    cy.get(".login-button").should("exist");
  });

  it("renders the correct error messages for invalid credentials", () => {
    cy.visit("/");
    cy.get(".username-login").type("invalid_username");
    cy.get(".password-login").type("invalid_password");
    cy.get(".submit-login").click();
    cy.get(".username-error").should("exist");
    cy.get(".password-error").should("exist");
  });

  it("redirects to the home page on successful login", () => {
    cy.visit("/");
    cy.get(".username-login").type("known_user");
    cy.get(".password-login").type("cypress-geek");
    cy.get(".submit-login").click();
    cy.url().should("eq", "/");
  });
});