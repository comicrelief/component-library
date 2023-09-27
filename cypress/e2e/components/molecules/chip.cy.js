describe('Chip component', () => {
  before(() => {
    // go to chip component
    cy.visit('/#chip');
    cy.wait(2500)
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Chip-container"] button[name="rsg-usage"]')
        .contains('Props & methods')
        .as('propsBtn');

      cy.get('@propsBtn')
        .closest('[class^=rsg--tabs]')
        .as('container');
    });

    it('is present', () => {
      cy.get('@propsBtn').should('exist');
    });

    it('does not show table initially', () => {
      cy.get('@container')
        .find('table')
        .should('not.exist');
    });

    it('shows the table on button click', () => {
      cy.get('@propsBtn').click();
      cy.get('@container')
        .find('table')
        .should('contain', 'Prop name');
    });
  });

  describe('Chip section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Chip-example-1"]')
        .as('container')
        .find('[data-preview="Chip"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('chip component should have label element', () => {
      cy.get('@container')
        .find('label').should('exist');
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
