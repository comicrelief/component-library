describe('ErrorText component', () => {
  before(() => {
    // go to errortext component
    cy.visit('/#errortext');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="ErrorText-container"]')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('error message should exist', () => {
      cy.get('[data-testid="ErrorText-examples"]')
        .find('h1')
        .contains('ErrorText')
        .should('exist');
    });

    it('displays error message', () => {
      cy.get('[data-testid="ErrorText-example-1"] span')
        .contains('This is an error')
        .should('exist');
    });

    it('has view code button', () => {
      cy.get('@viewCodeBtn').should('exist');
    });

    it('shows code on click', () => {
      cy.get('@viewCodeBtn').click();
      cy.get('@container')
        .find('textarea')
        .should('exist');
    });

    it('closes code on click', () => {
      cy.get('@viewCodeBtn').click();
      cy.get('@container')
        .find('textarea')
        .should('not.exist');
    });
  });
});
