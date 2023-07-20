/// <reference types="cypress" />
describe("The EIC DataStream 4 Canary Notifications", function () {
  before(function () {
    Cypress.Cookies.defaults({
      preserve: "__Host-spa",
    });

    cy.dataStream4CanaryLogin();

    cy.location().should((loc) => {
      expect(loc.toString()).to.eq("https://eicdatastream4canary.the-eic.com/");
    });
  });

  describe("Notifications", () => {
    it("verify notification", () => {
      let notifications = cy
        .get("#mnuNotifications > .menu-title")
        .click()
        .contains("Notifications")
        .should("be.visible");
      cy.location().should((loc) => {
        expect(loc.toString()).to.eq(
          "https://eicdatastream4canary.the-eic.com/"
        );
      });
    });
    it("verify Notification centre", () => {
      //cy.wait(10000);
      let notificationCentre = cy
        .get(
          "mat-list-option[id='mnuNotifications-NotificationCentre'] div[class='mat-list-text']",
          { timeout: 10000 }
        )
        .click()
        .contains("Notification Centre")
        .should("be.visible");
      cy.location().should((loc) => {
        expect(loc.toString()).to.eq(
          "https://eicdatastream4canary.the-eic.com/notificationcentre"
        );
      });
    });
  });
});
