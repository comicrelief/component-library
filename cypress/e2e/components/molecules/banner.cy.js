describe('Banner component', () => {
  before(() => {
    // go to banner component
    cy.visit('/#banner');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#banner');
      cy.get('[data-testid="Banner-container"] button[name="rsg-usage"]')
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

  describe('Banner section', () => {
    beforeEach(() => {
      cy.visit('/#banner');
      cy.get('[data-testid="Banner-example-1"]')
        .as('container')
        .find('[data-preview="Banner"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('should show element p with text', () => {
      cy.get('@container')
        .find('p').should('exist');
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