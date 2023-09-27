describe('Label component', () => {
  before(() => {
    // go to label component
    cy.visit('/#label');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#label');
      cy.get('[data-testid="Label-container"]')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('label should exist', () => {
      cy.get('[data-testid="Label-examples"]')
        .find('label')
        .should('exist');
    });
  });

  describe('Wrapping a basic text input: Label-example-0', () => {
    beforeEach(() => {
      cy.visit('/#label');
      cy.get('[data-testid="Label-example-0"')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders label Wrapping a basic text input', () => {
      cy.get('[data-testid="Label-example-0"]')
        .find('label')
        .contains('Wrapping a basic text input')
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
  });

  describe('Wrapping a styled input: Label-example-1', () => {
    beforeEach(() => {
      cy.visit('/#label');
      cy.get('[data-testid="Label-example-1"]')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders label wrapping a styled input', () => {
      cy.get('[data-testid="Label-example-1"]')
        .find('label')
        .contains('Wrapping a styled input')
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
  });
});
