/// <reference types="cypress" />
describe("The EIC DataStream 4 Canary Home Page", function () {
  it("should be succefully login", function () {
    cy.visit("https://eicdatastream4canary.the-eic.com/");
    cy.get("#LoginName").type("abc@the-eic.com");
    cy.get("#Password").type("Shiva999");
    cy.get(".btn-primary").click({ multiple: true });
    cy.wait(4000);
  });

  it("verify The brand logo", () => {
    cy.get(".brand-EIC").contains("EIC");

    cy.get(".brand-DataStream").contains("DataStream");
  });

  describe("Check for presence of filters", () => {
    it("Search ", () => {
      let search = cy.get(".menu-title").contains("Search");
    });

    it("Notifications", () => {
      let notifications = cy.get(".menu-title").contains("Notifications");
    });

    it("Reports", () => {
      let reports = cy.get(".menu-title").contains("Reports").click();
    });

    it("Analysis", () => {
      let analysis = cy.get(".menu-title").contains("Analysis");
    });

    it("Tools", () => {
      let tools = cy.get(".menu-title").contains("Tools");
    });

    it("Help", () => {
      let help = cy.get(".menu-title").contains("Help");
    });

    it("Your Account", () => {
      let yourAccount = cy.get(".menu-title").contains("Your Account");
    });
  });
});
