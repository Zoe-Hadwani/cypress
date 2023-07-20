/// <reference types="cypress" />
describe("The EIC DataStream 4 Canary Project Search", function () {
    Cypress.Cookies.defaults({
      preserve: "__Host-spa",
    });
    before(function () {
      cy.dataStream4CanaryLogin();
    });
  
    describe("verify the new project search", () => {
      it("Search ", () => {
        let search = cy
          .get(".menu-title")
          .contains("Search")
          .should("be.visible")
  
          .click()
          .wait(4000);
      });
  
      it("Projects ", () => {
        let projects = cy
          .get(
            "#mnuSearch-CapexProjects > .mat-list-item-content > .mat-list-text"
          )
          .click({ force: true });
        //cy.contains("Projects").should("be.visible");
        // cy.get("div")
        //   .should("contain", "Projects")
        //   .and("contain", "Contract Awards");
  
        //*****    OR  */
        cy.get('div:contains("Projects"):contains("Contract Awards")').should(
          "be.visible"
        );
      });
      describe("Add Filter ", () => {
        it.only("Add Filter  ", () => {
          let addFilter = cy
            .get(".btn.dropdown-toggle.btn-info")
            // .get(
            //   "#filtersForm > div > div:nth-child(1) > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > multiselect > div > button.btn.dropdown-toggle.btn-info"
            // )
  
            .click({ force: true })
            .contains("Add Filter")
            .should("be.enabled");
  
          let addFilterMenu = [
            "Project Name",
            "Project Value",
            "Terrain",
            "Industry Sector/Project Type",
            "Project Location",
            "Project Stage",
            "Project Status",
            "Start-up Year",
            "FID Date",
            "Free Text",
            "Equipment Types",
            "Pipelines",
            "Power Output (MW)",
            "Operators",
            "Wind Turbine Manufacturers",
            "Offshore Wind Foundation Types",
            "Water Depth",
            "contracting",
            "Contractors",
            "Contract Stage",
            "Project Created",
          ];
          cy.get(
            "#filtersForm > div > div:nth-child(1) > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > multiselect > div > div > ul.multiselect-scroll-container >li"
          ).should("have.length", 22);
  
          for (let i = 0; i < addFilterMenu.length; i++) {
            cy.get(
              "#filtersForm > div > div:nth-child(1) > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > multiselect > div > div > ul.multiselect-scroll-container"
            )
              .wait(4000)
              .children()
              .contains(addFilterMenu[i]);
          }
        });
  
        xit("Adding all selected filters for projects", () => {
          let projectL = cy.get(":nth-child(5) > a");
          //.contains("ProjectLocation");
  
          cy.get("#rdoCountry")
            .should("be.visible")
            .should("not.be.checked")
            .click();
          cy.wait(3000);
        });
      });
    });
  });
  
  // it("", () => {});
  
  //
  