/// <reference types="cypress" />
describe("The EIC DataStream 4 Canary Project Search", function () {
    before(function () {
      Cypress.Cookies.defaults({
        preserve: "__Host-spa",
      });
  
      cy.dataStream4CanaryLogin();
  
      cy.location().should((loc) => {
        expect(loc.toString()).to.eq("https://eicdatastream4canary.the-eic.com/");
      });
    });
  
    describe("Reports Categories", () => {
      it("contains 4 sub categories", () => {
        cy.wait(5000);
        const categories = [
          "Insight Reports",
          "Country Reports",
          "Sector Workbooks",
          "Manage PDF Reports",
        ];
        cy.get("#mnuReports > div").click(); //reports
  
        let list = cy.get(
          "#cdk-accordion-child-2 > div > mat-selection-list >mat-list-option "
        ); //  Sub reports
        list.should("have.length", 4);
        for (let i = 0; i < categories.length; i++) {
          cy.get(
            "#cdk-accordion-child-2 > div > mat-selection-list > mat-list-option "
          ).contains(categories[i]); //Sub Reports
        }
      });
    });
  
    describe("Insight reports", () => {
      it("Opens Tab", () => {
        const insightReportsTab = cy
          .get("#mnuReports-InsightReports > div > div.mat-list-text")
          .click(); // insight report
  
        cy.location().should((loc) => {
          expect(loc.toString()).to.eq(
            "https://eicdatastream4canary.the-eic.com/reports/insight"
          );
        });
      });
  
      it("Downloads Reports", () => {
        cy.get("#mnuReports > div").click(); // report
        const insightProjectTab = cy
          .get("#mnuReports-InsightReports > div > div.mat-list-text") //report download
          .click({force:true})
          cy.contains('Oil & Gas')
          .and ('Power, Nuclear & Renewables')
          .should('have.property','Business')
      });
    });
  
    describe("CountryRreports", () => {
      it("Opens Tab", () => {
        const countryReportsTab = cy
          .get("#mnuReports-CountryReports > div > div.mat-list-text")
          .click({ force: true });
  
        cy.location().should((loc) => {
          expect(loc.toString()).to.eq(
            "https://eicdatastream4canary.the-eic.com/reports/country"
          );
        });
      });
  
      it("Downloads Reports", () => {
        cy.get("#mnuReports > div").click(); // report
        const insightProjectTab = cy
          .get("#mnuReports-CountryReports > div > div.mat-list-text") //report download
          .click();
      });
    });
  
    describe("Sector Workbooks", () => {
      it("Opens Tab", () => {
        const sectorWorkbooksTab = cy
          .get("#mnuReports-SectorWorkbooks > div > div.mat-list-text")
          .click({force:true}); // insight report
  
        cy.location().should((loc) => {
          expect(loc.toString()).to.eq(
            "https://eicdatastream4canary.the-eic.com/reports/sectorworkbooks"
          );
        });
      });
  
      it("Downloads Reports", () => {
        cy.get("#mnuReports > div").click(); // report
        const insightProjectTab = cy
          .get("#mnuReports-SectorWorkbooks > div > div.mat-list-text") //report download
          .click();
      });
    });
  
    describe("Manage PDF Reports", () => {
      it("Opens Tab", () => {
        const managePdfReportsTab = cy
          .get(
            "#mnuReports-ManagePdfReports > .mat-list-item-content > .mat-list-text"
          )
          .click({ force: true });
  
        cy.location().should((loc) => {
          expect(loc.toString()).to.eq(
            "https://eicdatastream4canary.the-eic.com/reports/managepdfreports"
          );
        });
      });
  
      it("Downloads Reports", () => {
        cy.get("#mnuReports > div").click(); // report
        const pdfReportProjectTab = cy
          .get(
            "#mnuReports-ManagePdfReports > .mat-list-item-content > .mat-list-text"
          )
          //#mnuReports-ManagePdfReports > div > div.mat-list-text//
          .click({ force: true });
      });
    });
  });
  //#mnuReports-ManagePdfReports > .mat-list-item-content > .mat-list-text
  