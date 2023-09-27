describe('DoubleCopy component', () => {
  before(() => {
    // go to double copy component
    cy.visit('/#doublecopy');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#doublecopy');
      cy.get('[data-testid="DoubleCopy-container"] button[name="rsg-usage"]')
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

  describe('DoubleCopy section', () => {
    beforeEach(() => {
      cy.visit('/#doublecopy');
      cy.get('[data-testid="DoubleCopy-example-1"]')
        .as('container')
        .find('[data-preview="DoubleCopy"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders doublecopy preview', () => {
      cy.get('@container')
        .find('h1')
        .should('exist')
        .contains('Left Copy');
      cy.get('@container')
        .find('p')
        .should('exist');
      cy.get('@container')
        .find('div:nth-child(2) > div > h1')
        .should('exist')
        .contains('Right Copy');
      cy.get('@container')
        .find('div:nth-child(2) > div > p')
        .should('exist')
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
