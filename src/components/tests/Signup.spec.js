import cy from "cypress";
import Signup from "./Signup";

describe("Signup component", () => {
  it("renders the correct HTML", () => {
    cy.visit("/");
    cy.get(".signup-containers").should("exist");
    cy.get(".signup-container").should("exist");
    cy.get(".logo-section").should("exist");
    cy.get(".form-section").should("exist");
    cy.get(".input-container").should("exist");
    cy.get(".error-message").should("exist");
    cy.get(".signup-button").should("exist");
  });

  it("validates the user input correctly", () => {
    cy.visit("/");

    // Enter invalid first name
    cy.get(".firstName").type("");
    cy.get(".submit-signup").click();
    cy.get(".firstName-error").should("exist");

    // Enter invalid last name
    cy.get(".firstName").clear();
    cy.get(".lastName").type("");
    cy.get(".submit-signup").click();
    cy.get(".lastName-error").should("exist");

    // Enter invalid email
    cy.get(".lastName").clear();
    cy.get(".email").type("invalid_email");
    cy.get(".submit-signup").click();
    cy.get(".email-error").should("exist");

    // Enter invalid password
    cy.get(".email").clear();
    cy.get(".password").type("");
    cy.get(".submit-signup").click();
    cy.get(".password-error").should("exist");

    // Enter invalid confirm password
    cy.get(".password").clear();
    cy.get(".confirmPassword").type("");
    cy.get(".submit-signup").click();
    cy.get(".password-confirmation-error").should("exist");
  });

  it("redirects to the home page on successful signup", () => {
    cy.visit("/");

    // Enter valid input
    cy.get(".firstName").type("John");
    cy.get(".lastName").type("Doe");
    cy.get(".email").type("john.doe@example.com");
    cy.get(".password").type("password");
    cy.get(".confirmPassword").type("password");
    cy.get(".submit-signup").click();
    cy.url().should("eq", "/");
  });
});