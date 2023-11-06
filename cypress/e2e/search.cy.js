describe("Search Test", () => {
    beforeEach(() => {
    cy.visit("http://localhost:3001/auth");
    cy.wait(2000);
    cy.get('input[name="username"]').should("be.visible").type("admin");
    cy.get('input[name="password"]').should("be.visible").type("admin");
    cy.get('button[type="submit"]').click();
    cy.url().should("eq", "http://localhost:3001/");
    });
  
    it("Search for 'to feliz'", () => {
      cy.get('input[type="text"]').type("to feliz");
      cy.get('input[type="text"]').type("{enter}");
      cy.wait(2000);
      cy.get('input[type="text"]').type(" demais");
      cy.get('input[type="text"]').type("{enter}");
    });
  });

