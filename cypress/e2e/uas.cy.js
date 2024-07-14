describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-testid="form"]').should("exist");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "Enter your email")
      .type("admin@store.com")
      .should("have.value", "admin@store.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "Enter your password")
      .type("123456")
      .should("have.value", "123456");

    cy.get('[data-testid="submit"]').click();

    cy.get("div.home").should("be.visible");

    cy.get("div.sidebar").should("be.visible");
    cy.contains("Users").click();
    cy.url().should("contain", "/users");
    cy.get("div.datatableTitle").should("be.visible").contains("USERS");
    cy.contains("Category").click();
    cy.url().should("contain", "/categories");
    cy.get('[data-testid="add-new"]').click();
    cy.url().should("contain", "/categories/new");
    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Coffee")
      .type("Snack")
      .should("have.value", "Snack");
    cy.get('[data-testid="submit"]').click();
    cy.url().should("contain", "/categories");
    cy.get(".MuiDataGrid-root").should("be.visible");
    cy.contains(".MuiDataGrid-cell", "Snack")
      .parent()
      .within(() => {
        cy.get(".deleteButton").click();
      });

    cy.contains(".MuiDataGrid-cell", "Snack").should("not.exist");
  });
});
