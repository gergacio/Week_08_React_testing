describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  xit('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  xit("should have number buttons update the display of the running total", () => {
    cy.get("#number9").click();
    cy.get("#operator-subtract").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "5");
  });
  it("should have arithmetical operations update the display with the result of the operation", () => {
    cy.get("#number4").click();
    cy.get("#operator-divide").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "2");
  });
})