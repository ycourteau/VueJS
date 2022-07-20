// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "You did it!");
  });
});

describe('My Assert Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('My Assert false Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false);
  });
});

describe('My Visit Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io');
  });
});

describe('My Find Content Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type');
  });
});

describe('My Click Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click();

    
    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions');

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  });
});
