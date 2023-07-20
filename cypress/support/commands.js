// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//00

Cypress.Commands.add("dataStream4CanaryLogin", (email, password) => {
    cy.visit("https://eicdatastream4canary.the-eic.com/");
    cy.wait(5000);
    cy.get("#LoginName").type("Zoe.Hadwani@the-eic.com");
    cy.get("#Password").type("Shiva999", { sensitive: true });
    cy.get(".btn-primary").click();
  });
