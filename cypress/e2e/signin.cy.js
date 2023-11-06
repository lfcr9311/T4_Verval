describe("Sign In Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/auth");
    cy.wait(2000);
  });

  it("Sign in with valid credentials", () => {
    cy.get('input[name="username"]').should("be.visible").type("admin");
    cy.get('input[name="password"]').should("be.visible").type("admin");
    cy.get('button[type="submit"]').click();
    cy.url().should("eq", "http://localhost:3001/");
  });

  it("Sign in with invalid credentials", () => {
    cy.get('input[name="username"]').should("be.visible").type("xanfris");
    cy.get('input[name="password"]').should("be.visible").type("xonks");
    cy.get('button[type="submit"]').click();
  });
});

