/// <reference types="cypress" />
describe("page", () => {
  it("is not slow", () => {
    cy.visit(
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
    );
    cy.get('[aria-labelledby="examples"]').should("be.visible");
  });

  it("is also not slow", () => {
    cy.visit(
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
    );
    cy.get('[aria-labelledby="examples"]')
      .filter(":visible")
      .should("be.visible");
  });

  it("is slow and runner gets stuck for little while", () => {
    cy.visit(
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
    );
    cy.get('[aria-labelledby="see_also"]:visible').should(
      "include.text",
      "See also"
    );
  });
});
