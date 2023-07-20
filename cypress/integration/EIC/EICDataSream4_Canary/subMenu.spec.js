/// <reference types="cypress" />
describe.only("The EIC DataStream 4 Canary, Menu Elemenets", function () {
  Cypress.Cookies.defaults({
    preserve: "__Host-spa",
  });
  before(function () {
    cy.dataStream4CanaryLogin();
  });

  describe("All Menu", () => {
    it("menu", () => {
      let menuElements = [
        "Search",
        "Notifications",
        "Reports",
        "Analysis",
        "Tools",
        "Help",
        "Your Account",
        "My account",
      ];
      cy.get("mat-accordion >mat-expansion-panel").should("have.length", 7);
      for (let i = 0; i < menuElements.length; i++) {
        cy.get("mat-accordion").children().contains(menuElements[i]);
      }
    });
  });

  describe(" Verify Sub Menu Items", () => {
    it("Search", () => {
      let searchCategory = [" Projects", "Contract Awards"];

      cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(1)  > mat-expansion-panel-header"
      ).click();
      cy.contains(
        "mat-accordion > mat-expansion-panel:nth-child(1)",
        "Project"
      ).should("be.visible");

      cy.wait(4000);

      for (let i = 0; i < searchCategory.length; i++) {
        cy.get("mat-accordion > mat-expansion-panel:nth-child(1) ")
          .children()
          .contains("Contract Awards");
      }
    });

    it("Notifications", () => {
      let notificationsCategory = [" Notification Centre"];

      cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(2)  > mat-expansion-panel-header"
      )
        .click()
        .should("be.visible");
      cy.contains(
        "mat-accordion > mat-expansion-panel:nth-child(2)",
        "Notification Centre"
      ).should("be.visible");

      cy.wait(4000);
    });

    it("Reports", () => {
      let reportCategory = [
        "Insight Reports",
        "Country Reports",
        "Sector Workbooks",
        "Manage PDF Reports",
      ];

      cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(3) mat-list-option > div .mat-list-text"
      ).should("have.length", 4);

      for (let i = 0; i < reportCategory.length; i++) {
        cy.get("mat-accordion > mat-expansion-panel:nth-child(3)")
          .children()
          .contains(reportCategory[i]);
      }
    });

    it("Analysis", () => {
      let analysisCategory = ["Geographical Summary"];

      cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(4) mat-list-option > div .mat-list-text"
      ).should("have.length", 1);

      for (let i = 0; i < analysisCategory.length; i++) {
        cy.get("mat-accordion > mat-expansion-panel:nth-child(4)")
          .children()
          .contains(analysisCategory[i]);
      }
    });

    it("Tools", () => {
      let toolsCategory = [
        "Self-Service User Manager",
        "EICAssetMap",
        "EICSupplyMap",
      ];

      cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(5) mat-list-option > div .mat-list-text"
      ).should("have.length", 3);

      for (let i = 0; i < toolsCategory.length; i++) {
        cy.get("mat-accordion > mat-expansion-panel:nth-child(5)")
          .children()
          .contains(toolsCategory[i]);
      }
    });

    it("Help", () => {
      let helpCategory = ["Supported Platforms", "User Guide"];

      cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(6) mat-list-option > div .mat-list-text"
      ).should("have.length", 2);

      for (let i = 0; i < helpCategory.length; i++) {
        cy.get("mat-accordion > mat-expansion-panel:nth-child(6)")
          .children()
          .contains(helpCategory[i]);
      }
    });

    it("Your Account", () => {
      let yourAccountCategory = [
        "Change Your Password",
        "Log Out",
        "Log In",
        "User Info",
      ];

      cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(7) mat-list-option > div .mat-list-text"
      ).should("have.length", 4);

      for (let i = 0; i < yourAccountCategory.length; i++) {
        cy.get("mat-accordion > mat-expansion-panel:nth-child(7)")
          .children()
          .contains(yourAccountCategory[i]);
      }
    });
  });
});

/*
  
  it.only("Search", () => {
      let cat = [" Projects", "Contract Awards"];
  
      cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(1)  > mat-expansion-panel-header"
      ).click();
  
      cy.wait(4000);
      let Ele = cy.get(
        "mat-accordion > mat-expansion-panel:nth-child(1)  > mat-expansion-panel-header"
      );
      Ele.should("have.length", 2);
  
      for (let i = 0; i < cat.length; i++) {
        cy.get(
          "mat-accordion > mat-expansion-panel:nth-child(1)  > mat-expansion-panel-header"
        ).contains(cat[i]);
      }
    });
  
     xit("Reports", () => {
        cy.wait(5000);
        const reportsCategory = [
          "Insight Reports",
          "Country Reports",
          "Sector Workbooks",
          "Manage PDF Project Reports",
        ];
        cy.get(
          "mat-accordion > mat-expansion-panel:nth-child(3)  > mat-expansion-panel-header"
        ).click();
        let list = cy.get(
          "mat-accordion > mat-expansion-panel:nth-child(2)  > mat-expansion-panel-header"
        );
  
        for (let i = 0; i < reportsCategory.length; i++) {
          cy.get(
            "mat-accordion > mat-expansion-panel:nth-child(2)  > mat-expansion-panel-header"
          ).contains(reportsCategory[i]);
        }
      });
  
  
  
  */
