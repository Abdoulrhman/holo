describe("Input Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should search for a github user", () => {
    cy.get("input").type("Abdoul");
    cy.get(".list-cards").should("be.visible");
    cy.get(".list-cards").children().should("have.length", 10);
    cy.get("input").clear();
  });

  it("should search for a github repository", () => {
    cy.get("input").type("repo");
    cy.get(".list-cards").should("be.visible");
    cy.get(".list-cards").children().should("have.length", 10);
    cy.get("input").clear();
  });
});
